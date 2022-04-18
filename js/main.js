const data = {
  Parent: 
  // parent node
  {
    img: "father.png",
    name: "Jan Doe",
    age: "50",
    school:"naphi",
    children: [
      // left child
      {
        left: {
          img: "child_2.png",
          name: "silas",
          age: "22",
          children: [
            {
              left: {
                img: "child_3.png",
                name: "michel",
                age: "12",
              },
            },
            {
              right: {
                img: "child_3.png",
                name: "gordon",
                age: "12",
                wages: "12",
              },
            },
          ],
        },
      },
      // right child
      {
        right: {
          img: "child_4.png",
          name: "paul brendan edge ",
          age: "16",
          children: [
            {
              left: {
                img: "child_5.png",
                name: "nganjo",
                age: "18",
                children: [
                  {
                    left: {
                      img: "child_6.png",
                      name: "ndi",
                      age: "13",
                    },
                  },
                  {
                    right: {
                      img: "child_7.png",
                      name: "comi",
                      age: "10",
                    },
                  },
                ],
              },
            },
            {
              right: {
                img: "child_5.png",
                name: "job",
                age: "18",
                children: [
                  {
                    left: {
                      img: "child_6.png",
                      name: "herb",
                      age: "13",
                    },
                  },
                  {
                   right: {
                      img: "child_7.png",
                      name: "good",
                      age: "10",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};

// array to hold HTML tags
let markupArray = [];
// function for eventlisterner

// evaluate expressions
const createList = (items) => {
  switch ($.type(items)) {
    case "object":
      getItems(items);
      break;
  }
};

// get items in the object
const getItems = (items) => {
  for (const item in items) {
    markupArray.push(`<li class = "box"> <div class="test"> <i class ="far fa-eye eyetoggler"></i>`);
    // fetch the parent object
    let details = items[item];
    getDetails(details);
    // push the closing tag for parent
    markupArray.push(` </li> `);
  }
};  

// get details
const getDetails = (details) => {
  // iterate over the detail items of object
  for (const detail in details) {
    // fetch the value of each item
    if (detail == "img") {
      markupArray.push(
        `<img src="./img/${details[detail]}" alt="${details[detail]}">`
      );
    } else if (detail == "children") {
      markupArray.push(`</div>  <ul class = "nested">`);
      details[detail].forEach((element) => {
        getItems(element);
      });

      markupArray.push(`</ul>`);
    } 
    else if(detail == "name"){
      markupArray.push(`<button class = "btnforall">${details[detail]}</button>`)
    }
    
    else {
      markupArray.push(`<span class="details"> ${details[detail]} </span>`);
    }
  }
};

// call the function on page load
window.onload = () => {
  createList(data);
  document.getElementById("contened").innerHTML = markupArray.join("");
  
  
};

// adding event listerner to the 
var bdy = document.getElementById("contened");
bdy.addEventListener('click', (e) => {
if(e.target.classList.contains("btnforall")){
    el = e.target;
    var bigman = el.parentElement;
    var bigman2 = bigman.parentElement;
    console.log(bigman2)
    let final = bigman2.querySelector(".nested");
    if (final.style.display === "none"){
      final.style.display = "inline-flex"
    } else{
      final.style.display = "none"
    }
  } 
  // for the eye toggler 
  else if(e.target.classList.contains("eyetoggler")){
    ele = e.target;
    let bigwoman = ele.parentElement;
    console.log(bigwoman);
    let final2 = bigwoman.querySelector(".details");
    if (final2.style.display === "none"){
      final2.style.display = "inline-flex"
    } else{
      final2.style.display = "none"
    }

  }
})
