(function(window, document, undefined){
  window.onload = init;

  function init(){
      const box = document.getElementById('box')
      const cover = document.getElementById('cover')
      const leftBal = document.getElementById('left balloon');
      const rightBal = document.getElementById('righ balloon');
      const centerBal = document.getElementById('center balloon');

      const card_1 = document.querySelector('.card-container_1');
      const card_2 = document.querySelector('.card-container_2');
      const card_3 = document.querySelector('.card-container_3');
      const card_4 = document.querySelector('.card-container_4');
      const card_5 = document.querySelector('.card-container_5');
      const card_6 = document.querySelector('.card-container_6');
      const dog = document.querySelector('.dog');
      const minion = document.querySelector('.minion');
      const heart = document.querySelector('.heart');
      
      box.addEventListener('click', () => {
        box.style.animation = 'box-rotate 2s ease, box-blow 0.5s ease 1.7s, box-explosion 0.3s ease 2.2s forwards'; 
        cover.style.animation = 'cover-rotate 2s ease, cover-blow 0.5s ease 1.7s,cover-explosion 1s ease 2.18s forwards'; 
        leftBal.style.animation = 'left-bal 20s ease 2.18s forwards';
        rightBal.style.animation = 'right-bal 20s ease 2.18s forwards';
        centerBal.style.animation = 'center-bal 20s ease 2.18s forwards'

        card_1.style.animation = 'wish_1 0.4s ease-in-out 2.18s forwards'
        card_2.style.animation = 'wish_2 0.4s ease-in-out 2.5s forwards'
        card_3.style.animation = 'wish_3 0.4s ease-in-out 2.82s forwards'
        card_4.style.animation = 'wish_4 0.4s ease-in-out 3.14s forwards'
        card_5.style.animation = 'wish_5 0.4s ease-in-out 3.46s forwards'
        card_6.style.animation = 'wish_6 0.4s ease-in-out 3.78s forwards'

        dog.style.animation = 'dog 0.4s ease-in-out 4.1s forwards'
        
        minion.style.animation = 'minion 0.4s ease-in-out 4.42s forwards'
        
        setTimeout(function() { 
          minion.classList.toggle('minion_pos')
         }, 4820);

        setTimeout(function() { 
          dog.classList.toggle('dog_pos')
         }, 4500);

         setTimeout(function() { 
          dog.style.animation = ''
         }, 4500);
      })
      
      dog.addEventListener('click', () => {
        if (dog.style.animation != ''){
          dog.style.animation = ''
        } else{
          dog.style.animation = 'jump 0.4s ease-in-out' 
        }
      })

    
      
  }

})(window, document, undefined);
