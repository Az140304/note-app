const apiUrl = "http://localhost:5000/notes";

document.getElementById("userForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("/add-notes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Note added successfully!");
            loadNotes();
        } else {
            alert("Error adding note");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error adding note");
    }
});

async function loadNotes() {
    try {
        const res = await fetch(apiUrl);
        const notes = await res.json();
        const noteList = document.getElementById("note-lists");
        noteList.innerHTML = "";

        notes.forEach(note => {
            const noteElement = document.createElement("div");
            noteElement.classList.add("note-card");
            noteElement.innerHTML = `
                <form data-id="${note.id}" class="note-card">
                    <input type="text" name="title" value="${note.title}" required>

                    <div class="icon-box">
                        <input type="submit" value="Save" class="edit-note">
                        <button type="button" class="delete-note" data-id="${note.id}">delete
                        </button>
                    </div>
                </form>
            `;
            noteList.appendChild(noteElement);
        });

        document.querySelectorAll(".note-card").forEach(form => {
            form.addEventListener("submit", async (e) => {
                e.preventDefault();
                const noteId = form.getAttribute("data-id");
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                try {
                    const response = await fetch(`/edit-notes/${noteId}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                    });

                    if (response.ok) {
                        alert("Note updated successfully!");
                    } else {
                        alert("Error updating note");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    alert("Error updating note");
                }
            });
        });

        document.querySelectorAll(".delete-note").forEach(button => {
            button.addEventListener("click", async () => {
                const noteId = button.getAttribute("data-id");
                if (confirm("Are you sure you want to delete this note?")) {
                    try {
                        const response = await fetch(`/delete-notes/${noteId}`, { method: "DELETE" });
                        if (response.ok) {
                            alert("Note deleted successfully!");
                            loadNotes();
                        } else {
                            const errorMsg = await response.text();
                            alert(`Error deleting note: ${errorMsg}`);
                        }
                    } catch (error) {
                        console.error("Error:", error);
                        alert("Error deleting note");
                    }
                }
            });
        });
    } catch (error) {
        console.error("Error loading notes:", error);
    }
}

window.addEventListener("load", loadNotes);
