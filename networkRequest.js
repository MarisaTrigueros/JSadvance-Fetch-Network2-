document.getElementById('importPost').addEventListener('submit', async function(event){
    event.preventDefault();

    const title = document.getElementById("title").value;
    const completed = document.getElementById("completed").checked;

    const postData = {
        title: title,
        completed: completed,
    };

    
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        });

        console.log(postData);
        if (!response.ok){
            throw new Error("Error en el response")
        }

        const data = await response.json();
        console.log(data)

        const successMessage = document.createElement("h2");
        successMessage.textContent = `Post created: ${data.title}`;
        document.body.appendChild(successMessage);

        const postStatus = document.createElement("h3");
        postStatus.textContent = `Status del envío ${response.status}`;
        document.body.appendChild(postStatus);
  
    } catch (error){
        console.error("Error en el fetch: ", error);
        return ("Error en el fetch: ", error);
    }
    
})


    