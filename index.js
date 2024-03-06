const parent = document.getElementById("blogs-container");
var title = document.getElementById("input_title")
var content = document.getElementById("input_content")
var image = document.getElementById("input_image")


function CreateBlog() {
    if (!title.value || !content.value) return;
    console.log(title.value)
    console.log(content.value)
    console.log(image.value)
    alert("blog created");
    CreateBlogDiv(title.value, content.value, image.value);
}
function CreateBlogDiv(titleValue, contentValue, imageValue) {
    const newDiv = document.createElement("div");
    newDiv.className = "blog";
    parent.appendChild(newDiv);
    const titleDiv = document.createElement("h1");
    titleDiv.innerHTML = titleValue;
    const contentDiv = document.createElement("p");
    contentDiv.innerHTML = contentValue;
    const imageDiv = imageValue? document.createElement("img") : null;
    imageDiv.src = imageValue;
    newDiv.appendChild(titleDiv);
    if (imageDiv) newDiv.appendChild(imageDiv);
    newDiv.appendChild(contentDiv);
    parent.appendChild(newDiv);
    title.value = null;
    content.value = "";
    image.value = "";
}