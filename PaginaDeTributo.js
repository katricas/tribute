var tributeLink = document.getElementById("tribute-link");
    tributeLink.addEventListener("mouseover", function() {
      tributeLink.style.color = "red";
    });
    tributeLink.addEventListener("mouseout", function() {
      tributeLink.style.color = "blue";
    });

    var title = document.getElementById("title");
    title.addEventListener("mouseover", function() {
      this.style.color = "red";
    });
    title.addEventListener("mouseout", function() {
      this.style.color = "black";
    });