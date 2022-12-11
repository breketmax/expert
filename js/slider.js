
const wrapper = document.querySelector(".slider-wrapper")
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".slider-next");
const prevBtn = document.querySelector(".slider-prev");

let startPos=0;
let endPos =0;
let move = 0;
let counter=0;
let transalteCount =0;
let wrapperFullWidth = 0;
let previousLeft =0;
let newLeft=0



const imgs = wrapper.querySelectorAll(".slider img");
let unloadedImgs = imgs.length;

const checkLoad = () => {
  --unloadedImgs;
  console.log(unloadedImgs);
  if(!unloadedImgs){
    const slides= document.querySelectorAll(".slide");   
    const containerWidth =  document.querySelector(".sliderContainer").clientWidth;
    slides.forEach(slide =>{
      wrapperFullWidth+=slide.offsetWidth;
      console.log("before sub",wrapperFullWidth );
    })
    wrapperFullWidth= wrapperFullWidth - containerWidth + 24;
    addSliderHandlers();
    console.log("load all img");
  }  
}


imgs.forEach(i => {
  i.onload = checkLoad;
  i.addEventListener("dragstart", (e)=>{
    e.preventDefault();
  }) 
})
wrapper.addEventListener("dragstart", (e)=>{
  e.preventDefault()
}) 


const addSliderHandlers =() =>{
  console.log(wrapperFullWidth);
  wrapper.onpointerdown = function(event) {

    let downCoords = event.clientX;
    wrapper.setPointerCapture(event.pointerId);
    wrapper.onpointermove = function(event) {

      if(downCoords>event.clientX){
        newLeft = previousLeft +  event.clientX - slider.getBoundingClientRect().left;
      moveWrapper(-newLeft);
      }
      else{
        newLeft = previousLeft -  event.clientX - slider.getBoundingClientRect().left;
        moveWrapper(-newLeft);
      }

    };

    wrapper.onpointerup = function(event) {
      wrapper.onpointermove = null;
      wrapper.onpointerup = null;
      previousLeft = newLeft;

    };
  };
}


// wrapper.addEventListener("pointerdown",(e)=>{
//   wrapper.style.transition = "none"
//    startPos = e.clientX;
//    wrapper.addEventListener("pointermove",function handler(evt){

//     let dif = startPos - evt.clientX;
//     if(dif>0){
//       counter-=9
//     }
//     else{
//       counter+=9
//     }
    
//     if(counter <= -wrapperFullWidth){
//       nextBtn.classList.add("inactive");
//       counter = -wrapperFullWidth;
//       wrapper.addEventListener("pointerup",()=>{
//         wrapper.removeEventListener("pointermove",handler);
//       })
//       return;
//     }
//     if(counter >=9){
//       prevBtn.classList.add("inactive");
//       counter =0;
//       wrapper.addEventListener("pointerup",()=>{
//         wrapper.removeEventListener("pointermove",handler)
//       })
//       return;
//     }

//     moveWrapper(counter);
//     console.log(counter);
//     wrapper.addEventListener("pointerup",()=>{

//       wrapper.removeEventListener("pointermove",handler)
//     })
//   })
// })




const moveWrapper = (length)=>{

  if(length >=0 ){
    wrapper.style.transform=`translate(${0}px,0px)`; 
    prevBtn.classList.add("inactive");
    previousLeft=0;
    return; 
  }
  else if(length <= -wrapperFullWidth){
    wrapper.style.transform=`translate(${-wrapperFullWidth}px,0px)`;
    nextBtn.classList.add("inactive");
    previousLeft=wrapperFullWidth;
    return;
  }
  wrapper.style.transform=`translate(${length}px,0px)`;  
  prevBtn.classList.remove("inactive");
  nextBtn.classList.remove("inactive");
}


nextBtn.addEventListener("click",()=>{
  wrapper.style.transition = "all 0.5s ease";
  counter = -previousLeft-300;
  previousLeft+=300;
  if(counter < -wrapperFullWidth){
    counter = -wrapperFullWidth;
  }
  moveWrapper(counter);

})


prevBtn.addEventListener("click",()=>{
  wrapper.style.transition = "all 0.5s ease";
  counter=previousLeft-300;
  previousLeft-=300;
  if(counter <= 0){
    counter =0;
  }
  moveWrapper(-counter);
})
