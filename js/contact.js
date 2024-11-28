
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split(""); // Split text content into individual characters.
 
  element.innerText = ""; // Clear original content.
 
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    outer.className = "outer";
   
    const inner = document.createElement("span");
    inner.className = "inner";
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
   
    const letter = document.createElement("span");
    letter.className = "letter";
    letter.innerText = value;
    letter.style.animationDelay = `${index * 300}ms`; // Adjust delay for smoother animations.
   
    inner.appendChild(letter);    
    outer.appendChild(inner);    
    element.appendChild(outer);
  });
}


// Apply enhancements to multiple elements.
enhance("channel-link");
enhance("email-link");


