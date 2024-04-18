document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
   
 
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
   

    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(JSON.stringify(formDataObject, null, 2));
    window.location.href = `mailto:polarizepcs@gmail.com?subject=${subject}&body=${body}`;
  });
