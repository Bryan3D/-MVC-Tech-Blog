// new form handler - this is the function that is called when the new form is submitted

const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#post-name').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (name && content && description) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ name, content, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

const deleteButtonHandler = async (event) => {  
    // if the element that was clicked on has the data-id attribute, execute this code
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/posts/${id}`, {  
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
        }
    };

document
    .querySelector('.new-post-form')   
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.post-list')
    .addEventListener('click', deleteButtonHandler);

// Path: public\js\dashboard.js



