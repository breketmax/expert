
const wrapper = document.querySelector(".slider-wrapper")
const slider = document.querySelector("#partners");
const nextBtn = document.querySelector(".slider-next");
const prevBtn = document.querySelector(".slider-prev");

let startPos=0;
let endPos =0;
let move = 0;
let counter=0;
let transalteCount =0;
let wrapperFullWidth = 0;

const slides= document.querySelectorAll(".slide")
const containerWidth =  document.querySelector(".container").clientWidth;

slides.forEach(slide =>{
  wrapperFullWidth+=slide.offsetWidth
})

wrapperFullWidth= wrapperFullWidth - containerWidth + 24 + 9;

const imgs = wrapper.querySelectorAll("img");
imgs.forEach(i => {
  i.addEventListener("dragstart", (e)=>{
    e.preventDefault()
  }) 
})
wrapper.addEventListener("dragstart", (e)=>{
  e.preventDefault()
}) 
wrapper.addEventListener("mousedown",(e)=>{
  wrapper.style.transition = "none"
   startPos = e.clientX;
   wrapper.addEventListener("mousemove",function handler(evt){
   
    let dif = startPos - evt.clientX;
    if(dif>0){
      counter-=9
    }
    else{
      counter+=9
    }
    
    if(counter <= -wrapperFullWidth){
      nextBtn.classList.add("inactive");
      counter = -wrapperFullWidth;
      wrapper.addEventListener("mouseup",()=>{
        wrapper.removeEventListener("mousemove",handler)
      })
      return;
    }
    if(counter >=9){
      prevBtn.classList.add("inactive");
      counter =0;
      wrapper.addEventListener("mouseup",()=>{
        wrapper.removeEventListener("mousemove",handler)
      })
      return;
    }

    moveWrapper(counter)
    wrapper.addEventListener("mouseup",()=>{
      wrapper.removeEventListener("mousemove",handler)
    })
  })
})

const moveWrapper = (length)=>{
  wrapper.style.transform=`translate(${length}px,0px)`;
  if(length !=0 && length !=-wrapperFullWidth){
    prevBtn.classList.remove("inactive");
    nextBtn.classList.remove("inactive");
  }

}


nextBtn.addEventListener("click",()=>{

  wrapper.style.transition = "all 0.5s";
  counter = counter-300;
  if(counter < -wrapperFullWidth){
    counter = -wrapperFullWidth;
    nextBtn.classList.add("inactive");
  }
  moveWrapper(counter);

})


prevBtn.addEventListener("click",()=>{
  wrapper.style.transition = "all 0.5s";
  counter=counter+300;
  if(counter >=0){
    counter =0;
    prevBtn.classList.add("inactive");
  }
  moveWrapper(counter);

})
