  























let faqOne = function (x) {
    
    

    // grap the elements we need to manipulate
    let getArrowIcon = document.querySelector("#" + x + " h5 img");
    let faqQuestion = document.querySelector("#" + x + " h5");
    let getReply = document.querySelector("#" + x + " p");

    let y = getComputedStyle(getReply).display;
    
    let allFaqQuestion = document.querySelectorAll(".allfaq h5");
    let allIcons = document.querySelectorAll(".allfaq h5 img");
    let allFaqReply = document.querySelectorAll(".allfaq p");

    
 
        let fql = allFaqQuestion.length;
        for (let i = 0; i < fql; i++) {
            allFaqQuestion[i].style.cssText = "font-weight: 400; color: black;";
            
        }

        let ic = allIcons.length;
        for (let i = 0; i < ic; i++) {
            allIcons[i].style.transform = "rotate(0deg)";
            
        }

        let frl = allFaqReply.length;
        for (let i = 0; i < frl; i++) {
            allFaqReply[i].style.display = "none";
        }


    if (y == 'none') {
        
        faqQuestion.style.cssText = "font-weight: 900; color: black;";
        getArrowIcon.style.transform = "rotate(180deg)";
        getReply.style.display = "block";

    } else if (y == 'block') {
        
        faqQuestion.style.cssText = "font-weight: 400; color: black;";
        getArrowIcon.style.transform = "rotate(0deg)";
        getReply.style.display = "none";

    }

}
    




   
    







/*

  if (y == 'none') {
        
        faqQuestion.style.cssText = "font-weight: 900; color: black;";
        getArrowIcon.style.transform = "rotate(180deg)";
        getReply.style.display = "block";

    } 



    let allFaqQuestion = document.querySelectorAll(".allfaq h5");
    let allIcons = document.querySelectorAll(".allfaq h5 img");
    let allFaqReply = document.querySelectorAll(".allfaq p");

    
 
        let fql = allFaqQuestion.length;
        for (let i = 0; i < fql; i++) {
            allFaqQuestion[i].style.cssText = "font-weight: 400; color: black;";
            
        }

        let ic = allIcons.length;
        for (let i = 0; i < ic; i++) {
            allIcons[i].style.transform = "rotate(0deg)";
            
        }

        let frl = allFaqReply.length;
        for (let i = 0; i < frl; i++) {
            allFaqReply[i].style.display = "none";
        }




        if (faqStatus === false) {
        
        faqQuestion.style.cssText = "font-weight: 900; color: black;";
        getArrowIcon.style.transform = "rotate(180deg)";
        getReply.style.display = "block";

        faqStatus = true;
    } else if (faqStatus === true) {
        faqQuestion.style.cssText = "font-weight: 400; color: black;";
        getArrowIcon.style.transform = "rotate(0deg)";
        getReply.style.display = "none";

        faqStatus = false;
    }

 */
     