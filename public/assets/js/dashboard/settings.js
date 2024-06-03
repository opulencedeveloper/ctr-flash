const imgUpl = document.getElementById("upload-img");

if (imgUpl) {
  imgUpl.addEventListener("click", function () {
    document.getElementById("file-input").click();
  });

  document
    .getElementById("file-input")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (
        file &&
        (file.type === "image/jpeg" ||
          file.type === "image/jpg" ||
          file.type === "image/png")
      ) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const imgElement = document.getElementById("display-image");
          imgElement.src = e.target.result;
          imgElement.style.display = "block";
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select an image file of type jpeg, jpg, or png.");
      }
    });
}
