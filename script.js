<script>
    $(document).ready(function() {
       
    var Modal = document.getElementById('modal'); 
    var key = 'hadModal',
    hadModal = localStorage.getItem(key);
    
    if (!hadModal) {
     document.getElementById("modal").innerHTML = `<div class="modal-video"><div class="modal-video-content"><span id="close" class="close" onclick="closeModal()">&times;</span><iframe width="100%" height="600rem" src="https://www.youtube.com/embed/A6Vf8QnZDHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> </div>`;
          // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
      
      // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
       document.getElementById("modal").style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
         document.getElementById("modal").style.display = "none";
      }
    }
        localStorage.setItem(key, true);
    }
    
     });
    </script>
