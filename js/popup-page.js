// script.js
// 获取算法详细信息元素

const algorithmDetails = document.getElementById("popup");

//首先选择ol元素
const Elements = document.querySelectorAll("#terms, #expert");
//const divElement = document.querySelector("#terms");
//const expertElement = document.querySelector("#expert");

//点击li元素时从其中的li元素中得到data-json属性的值
Elements.forEach(function(element) {
 element.addEventListener('click', function(event) {
    const jsonPath = event.target.getAttribute('data-json');
    // 使用 fetch 加载相应的 JSON 文件
    console.log("ok");
    console.log(jsonPath);
    fetch(jsonPath)
      .then(response => response.json())
      .then(data => {
        // 处理加载的 JSON 数据，例如显示或处理它
        algorithm = data; // 将加载的数据存储在algorithms中
        console.log("It is OK!")
        //console.log(data);
        console.log(algorithm.title);
        console.log(algorithm.summary);
        console.log("come in 0")
        if (algorithm.title) {
            console.log("come in 1")
            // -----------------title-----------
            if (algorithm.title){
                algorithmDetails.querySelector("#popup-title").textContent = algorithm.title;
            } else{
                algorithmDetails.querySelector("#popup-title").textContent = "";
            }

            //------------ summary -----------------
            if (algorithm.summary){
                  algorithmDetails.querySelector("#popup-summary").innerHTML = algorithm.summary;
               
            } else{
                algorithmDetails.querySelector("#popup-summary").textContent = "...";
            }
            
        }
        showPopup();
    })
    .catch(error => {
    console.error('Error loading JSON data:', error);

  });
 });
});


function showPopup() {
    console.log("come in show")
    $("#popup").show().draggable();/*.resizable();*/
}

function closePopup() {
   $("#popup").hide();
}
