// script.js
// 获取算法详细信息元素
const algorithmDetails = document.getElementById("algorithm-details");
// 获取算法索引元素
const algorithmIndexList = document.getElementById("algorithm-index-list");


// Convert HTMLCollection to an array
const childrenArray1 = Array.from(algorithmIndexList.children);
childrenArray1.forEach((childElement) => {
  // 这里可以对 childElement 进行操作
    algorithmIndexList.removeChild(childElement);
});
//首先选择ul元素
const ulElement = document.querySelector('ul');
//点击li元素时从其中的li元素中得到data-json属性的值
ulElement.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    // 获取所点击元素的父节点（<li>元素）
    const liElement = event.target.parentElement;
    // 获取所点击元素的 data-json 属性
    const jsonPath = liElement.getAttribute('data-json');
    // 使用 fetch 加载相应的 JSON 文件
    fetch(jsonPath)
      .then(response => response.json())
      .then(data => {
        // 处理加载的 JSON 数据，例如显示或处理它
        algorithm = data; // 将加载的数据存储在algorithms中
        console.log(data);

        if (algorithm) {
            // -----------------title-----------
            if (algorithm.title){
                algorithmDetails.querySelector("#algorithm-title").textContent = algorithm.title;
            } else{
                algorithmDetails.querySelector("#algorithm-title").textContent = "";
            }

            //------------ summary -----------------
            if (algorithm.summary){
                  algorithmDetails.querySelector("#algorithm-summary").textContent = algorithm.summary;

                  // 创建一个列表项
                  const listItem = document.createElement("li");
                  listItem.innerHTML = `<a href="#algorithm-summary" data-algorithm="algorithm-summary">Summary</a>`;

                  // 检查是否已存在具有相同文本内容的列表项
                  const existingItems = algorithmIndexList.querySelectorAll('li');
                  let itemExists = false;

                  existingItems.forEach((item) => {
                    if (item.textContent === listItem.textContent) {
                      itemExists = true;
                      return;
                    }
                  });

                  // 如果没有相同的列表项，则将新列表项添加到算法索引
                  if (!itemExists) {
                    algorithmIndexList.appendChild(listItem);
                  }
               
            } else{
                algorithmDetails.querySelector("#algorithm-summary").textContent = "...";
            }

            //--------------------- Advantages -------------------
            if (algorithm.advantages){
                const advantages = algorithm.advantages;
                const advantagesList = document.getElementById("algorithm-advantages");
                advantagesList.innerHTML="";

                for (const advantage in advantages) {
                  if (advantages.hasOwnProperty(advantage)) {
                    //const liElement = document.createElement("li");
                    const pElement = document.createElement("p");
                    
                    //pElement.textContent = `${advantage}: ${advantages[advantage]}`;
                    pElement.innerHTML = `<span style="color: blue; font-weight: bold;">${advantage}:</span> ${advantages[advantage]}`;
    
                    
                    //liElement.appendChild(pElement);
                    //advantagesList.appendChild(liElement);
                    advantagesList.appendChild(pElement);
                  }
                }

                // 将 advantagesList 元素添加到 algorithmDetails 中
                //const algorithmDetails = document.getElementById("algorithm-details");
                //const algorithmAdvantages = algorithmDetails.querySelector("#algorithm-advantages");
                //algorithmAdvantages.appendChild(advantagesList);
                //------------
                //algorithmDetails.querySelector("#algorithm-advantages").textContent = advantagesList;

                // 创建一个列表项
                const listItem = document.createElement("li");
                listItem.innerHTML = `<a href="#algorithm-advantages" data-algorithm="algorithm-advantages">Advantages</a>`;

                // 检查是否已存在具有相同文本内容的列表项
                const existingItems = algorithmIndexList.querySelectorAll('li');
                let itemExists = false;

                /*existingItems.forEach((item) => {
                if (item.textContent === listItem.textContent) {
                  itemExists = true;
                  break;
                  //return;
                }
                });*/
                for (const item of existingItems) {
                    if (item.textContent === listItem.textContent) {
                        itemExists = true;
                        break;  // 终止循循环
                    }
                }

                // 如果没有相同的列表项，则将新列表项添加到算法索引
                if (!itemExists) {
                    algorithmIndexList.appendChild(listItem);
                }
            } else{
                algorithmDetails.querySelector("#algorithm-advantages").textContent = "...";
            }

            //------------------------ Disadvantages -------------------------
            if (algorithm.disadvantages){
                const disadvantages = algorithm.disadvantages;
                const disadvantagesList = document.getElementById("algorithm-disadvantages");
                disadvantagesList.innerHTML="";

                for (const disadvantage in disadvantages) {
                  if (disadvantages.hasOwnProperty(disadvantage)) {
                    //const liElement = document.createElement("li");
                    const pElement = document.createElement("p");
                    
                    //pElement.textContent = `${advantage}: ${advantages[advantage]}`;
                    pElement.innerHTML = `<span style="color: blue; font-weight: bold;">${disadvantage}:</span> ${disadvantages[disadvantage]}`;
    
                    
                    //liElement.appendChild(pElement);
                    //advantagesList.appendChild(liElement);
                    disadvantagesList.appendChild(pElement);
                  }
                }
                // 创建一个列表项
                const listItem = document.createElement("li");
                listItem.innerHTML = `<a href="#algorithm-disadvantages" data-algorithm="algorithm-disadvantages">Disadvantages</a>`;

                // 检查是否已存在具有相同文本内容的列表项
                const existingItems = algorithmIndexList.querySelectorAll('li');
                let itemExists = false;

                existingItems.forEach((item) => {
                if (item.textContent === listItem.textContent) {
                  itemExists = true;
                  return;
                }
                });

                // 如果没有相同的列表项，则将新列表项添加到算法索引
                if (!itemExists) {
                    algorithmIndexList.appendChild(listItem);
                }
            } else{
                algorithmDetails.querySelector("#algorithm-disadvantages").textContent = "...";
            }

            if (algorithm.examples){
                algorithmDetails.querySelector("#algorithm-examples").textContent = algorithm.examples;

                // 创建一个列表项
                const listItem = document.createElement("li");
                listItem.innerHTML = `<a href="#algorithm-examples" data-algorithm="algorithm-examples">Examples</a>`;

                // 检查是否已存在具有相同文本内容的列表项
                const existingItems = algorithmIndexList.querySelectorAll('li');
                let itemExists = false;

                existingItems.forEach((item) => {
                if (item.textContent === listItem.textContent) {
                  itemExists = true;
                  return;
                }
                });

                // 如果没有相同的列表项，则将新列表项添加到算法索引
                if (!itemExists) {
                    algorithmIndexList.appendChild(listItem);
                }
            } else{
                algorithmDetails.querySelector("#algorithm-examples").textContent = "...";
            }
            
        }

        console.log(algorithmIndexList);
      })
      .catch(error => {
        console.error('Error loading JSON data:', error);
      });
  }
});

