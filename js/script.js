function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");
  
    modal.style.display = "block"; 
    modalImage.src = image.src; 
    caption.innerHTML = image.alt; 
  }
  
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; 
  }