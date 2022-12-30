// Text area prep
  const textarea = document.getElementById('outputArea');

// Buttons & Switches
  function reply_click(clicked_id){

    // Variables 
    var text = clicked_id;
    var clip= document.getElementById("s1");
    var auto= document.getElementById("s2");
    var apnd= document.getElementById("s3");
    var apndtext= " ";

    // Switch variations  
    if(apnd.checked == true){// Append ", "
      apndtext=", ";
    }else{
      apndtext= " ";
    }
    if(clip.checked == true){// Clipboard 
      navigator.clipboard.writeText(text+apndtext);
    }
    if(auto.checked == true){// Autopaste 
      textarea.value += (text+apndtext);
    }
  
  }

// Tabs
  function openTab(evt, tabNumber) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(tabNumber).style.display = "block";
      evt.currentTarget.className += " active";
    }
  document.getElementById("defaultOpen").click();