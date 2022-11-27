(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-footer-modal1-open]"),
      closeModalBtn: document.querySelector("[data-footer-modal1-close]"),
      modal: document.querySelector("[data-footer-modal1]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-footer-modal2-open]"),
      closeModalBtn: document.querySelector("[data-footer-modal2-close]"),
      modal: document.querySelector("[data-footer-modal2]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();