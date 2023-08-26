var changeContentButtonUS = document.getElementById("change-content-button_US");
var changeContentButtonVN = document.getElementById("change-content-button_VN");
var isContentInVN = true;
// title h1
var dynamicContentH1Intruduce = document.getElementById("dynamic-content-title-h1-intruduce");
var dynamicContentH1intruduce_MpCo = document.getElementById("dynamic-content-title-h1-company");
var dynamicContentH1StrategicProject = document.getElementById("dynamic-content-title-h1-strategic_project");
var dynamicContentH1Field = document.getElementById("dynamic-content-title-h1-field");
var dynamicContentH1Bussiness = document.getElementById("dynamic-content-title-h1-business");
var dynamicContentH1News = document.getElementById("dynamic-content-title-h1-news");
// biến khai báo lĩnh vực kinh doanh
var dynamicFieldTitleItem1 = document.getElementById("dynamic-content-field-title-itemt1");
var dynamicFieldTitleItem2 = document.getElementById("dynamic-content-field-title-itemt2");
var dynamicFieldTitleItem3 = document.getElementById("dynamic-content-field-title-itemt3");
var dynamicFieldTitleItem4 = document.getElementById("dynamic-content-field-title-itemt4");
var dynamicContentBussinessAreas = document.getElementById("dynamic-content-bussiness-areas");
// biên khai báo tiêu đề số liệu thống kê
var dynamicTitleStartup = document.getElementById("dynamic-content-title-startupmp");
var dynamicTitleProject = document.getElementById("dynamic-content-title-projectmp");
var dynamicTitleCustomer = document.getElementById("dynamic-content-title-customermp");
var dynamicTitleProduct = document.getElementById("dynamic-content-title-productmp");
// biến khai báo button xêm thêm
var dynamicContenSeemore = document.getElementById("dynamic-content-seemore");
var dynamicContenSeemoreProject = document.getElementById("dynamic-content-seemore-project");
var dynamicContenSeemoreField = document.getElementById("dynamic-content-seemore-field");
var dynamicContenSeemoreNews = document.getElementById("dynamic-content-seemore-news");
var dynamicContenSeemoreItem1 = document.getElementById("dynamic-content-seemore-item1");
var dynamicContenSeemoreItem2 = document.getElementById("dynamic-content-seemore-item2");
// biến khai báo đoạn văn giới thiệu về mỹ phương
var dynamicContent = document.getElementById("dynamic-content_intruduce");
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// hàm để hiện thị title cho các div
function displayContentH1Intruduce(content){
  dynamicContentH1Intruduce.textContent = content;
}
function displayContentH1intruduce_MpCo(content){
  dynamicContentH1intruduce_MpCo.textContent = content;
}
function displayContentH1StrategicProject(content){
  dynamicContentH1StrategicProject.textContent = content;
}
function displayContentH1Field(content){
  dynamicContentH1Field.textContent = content;
}
function displayContentH1Bussiness(content){
  dynamicContentH1Bussiness.textContent = content;
}
function displayContentH1News(content){
  dynamicContentH1News.textContent = content;
}

// hàm để hiện thị nội dung lĩnh vực kinh doanh
function displayContentBussinessAreas(content){
  dynamicContentBussinessAreas.textContent = content;
}
function displayFieldTitleItem1(content){
  dynamicFieldTitleItem1.textContent = content;
}
function displayFieldTitleItem2(content){
  dynamicFieldTitleItem2.textContent = content;
}
function displayFieldTitleItem3(content){
  dynamicFieldTitleItem3.textContent = content;
}
function displayFieldTitleItem4(content){
  dynamicFieldTitleItem4.textContent = content;
}
// hàm để hiện thị nội dung "title thống kê"
function displayTitleStartup(content){
  dynamicTitleStartup.textContent = content;
}
function displayTitleProject(content){
  dynamicTitleProject.textContent = content;
}
function displayTitleCustomer(content){
  dynamicTitleCustomer.textContent = content;
}
function displayTitleProduct(content){
  dynamicTitleProduct.textContent = content;
}

// Hàm để hiển thị nội dung "content_seemore" lên button
function displaySeemoreContent(content) {
  dynamicContenSeemore.textContent = content;
  dynamicContenSeemoreProject.textContent = content; 
  dynamicContenSeemoreField.textContent= content;
  dynamicContenSeemoreNews.textContent = content;
  dynamicContenSeemoreItem1.textContent = content;
  dynamicContenSeemoreItem2.textContent = content;
}
// Hàm để hiển thị nội dung từ data.json
function displayContent(content) {
  dynamicContent.textContent = content;
}



// Mặc định hiển thị nội dung từ data.json
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    displayContent(data.content_intruduce);
    displaySeemoreContent(data.content_seemore);
    displayTitleStartup(data.content_title_startup);
    displayTitleProject(data.content_title_project);
    displayTitleCustomer(data.content_title_customer);
    displayTitleProduct(data.content_title_product);
    displayContentBussinessAreas(data.content_business_areas);
    displayFieldTitleItem1(data.content_field_title_item1);
    displayFieldTitleItem2(data.content_field_title_item2);
    displayFieldTitleItem3(data.content_field_title_item3);
    displayFieldTitleItem4(data.content_field_title_item4);
    // title
    displayContentH1Intruduce(data.content_title_h1_intruduce);
    displayContentH1intruduce_MpCo(data.content_title_h1_intruduce_MpCo);
    displayContentH1StrategicProject(data.content_title_h1_strategic_project);
    displayContentH1Field(data.content_title_h1_Field);
    displayContentH1Bussiness(data.content_title_h1_Business);
    displayContentH1News(data.content_title_h1_news);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Sự kiện click cho hình ảnh VN
changeContentButtonVN.addEventListener("click", function () {
  if (!isContentInVN) {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        displayContent(data.content_intruduce);
        displaySeemoreContent(data.content_seemore);
        displayTitleStartup(data.content_title_startup);
        displayTitleProject(data.content_title_project);
        displayTitleCustomer(data.content_title_customer);
        displayTitleProduct(data.content_title_product);
        displayContentBussinessAreas(data.content_business_areas);
        displayFieldTitleItem1(data.content_field_title_item1);
        displayFieldTitleItem2(data.content_field_title_item2);
        displayFieldTitleItem3(data.content_field_title_item3);
        displayFieldTitleItem4(data.content_field_title_item4);
          // title
        displayContentH1Intruduce(data.content_title_h1_intruduce);
        displayContentH1intruduce_MpCo(data.content_title_h1_intruduce_MpCo);
        displayContentH1StrategicProject(data.content_title_h1_strategic_project);
        displayContentH1Field(data.content_title_h1_Field);
        displayContentH1Bussiness(data.content_title_h1_Business);
        displayContentH1News(data.content_title_h1_news);
        isContentInVN = true;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
});

// Sự kiện click cho hình ảnh US
changeContentButtonUS.addEventListener("click", function () {
  if (isContentInVN) {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        displayContent(data.content_intruduce_US);
        displaySeemoreContent(data.content_seemore_US);
        displayTitleStartup(data.content_title_startup_US);
        displayTitleProject(data.content_title_project_US);
        displayTitleCustomer(data.content_title_customer_US);
        displayTitleProduct(data.content_title_product_US);
        displayContentBussinessAreas(data.content_business_areas_US);
        displayFieldTitleItem1(data.content_field_title_item1_US);
        displayFieldTitleItem2(data.content_field_title_item2_US);
        displayFieldTitleItem3(data.content_field_title_item3_US);
        displayFieldTitleItem4(data.content_field_title_item4_US);
          // title
        displayContentH1Intruduce(data.content_title_h1_intruduce_US);
        displayContentH1intruduce_MpCo(data.content_title_h1_intruduce_MpCoe_US);
        displayContentH1StrategicProject(data.content_title_h1_strategic_project_US);
        displayContentH1Field(data.content_title_h1_Field_US);
        displayContentH1Bussiness(data.content_title_h1_Business_US);
        displayContentH1News(data.content_title_h1_news_US);
        isContentInVN = false;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
});


// Hàm animation chạy số
function animateNumberWithSign(startNumber, targetNumber, elementId, speed, numberSign) {
  let currentNumber = startNumber;
  const element = document.getElementById(elementId);

  const interval = setInterval(() => {
    if (currentNumber < targetNumber) {
      currentNumber++;
      element.innerText = currentNumber + numberSign;
    } else if (currentNumber > targetNumber) {
      currentNumber--;
      element.innerText = currentNumber + numberSign;
    } else {
      clearInterval(interval);
    }
  }, speed);
}
// Sử dụng Fetch API để đọc dữ liệu từ tệp data.json
fetch('data.json')
  .then(response => response.json())
  .then(json => {
    const startStartUp = json.number_start_startup;
    const startProject = json.number_start_project;
    const startCustomer = json.number_start_customer;
    const startProduct = json.number_start_product;
    const startupNumber = json.number_startup;
    const projectNumber = json.number_project;
    const customerNumber = json.number_customer;
    const revenueNumber = json.number_product;
    const numberSign = json.number_sign;

    // Sử dụng các giá trị từ tệp JSON để gọi hàm animateNumberWithSign
    animateNumberWithSign(startStartUp, startupNumber, "dynamic-content-startupmp", 70, numberSign);
    animateNumberWithSign(startProject, projectNumber, "dynamic-content-projectmp", 20, numberSign);
    animateNumberWithSign(startCustomer, customerNumber, "dynamic-content-customermp", 20, numberSign);
    animateNumberWithSign(startProduct, revenueNumber, "dynamic-content-productmp", 20, numberSign);
    
  })
  .catch(error => console.error('Error fetching JSON:', error));