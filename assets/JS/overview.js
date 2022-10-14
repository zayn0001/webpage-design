function showmore(id, button) {
    var moreText = document.getElementById(id);
  
    if (moreText.style.display === "none") {
      moreText.style.display = "flex";
      button.style.backgroundImage = "url('assets/images/expand-less.png')";
    } else {
      moreText.style.display = "none";
      button.style.backgroundImage = "url('assets/images/expand-more.png')";
    }
  }