const fs = require("fs");
const translator = require("./translator");

const input = `/* #*/ export const PERSON = \`
name:
  first: 林宸右
  middle:
  last: 
about: 熱愛後端服務
position: Backend Developer

birth:
  year: 1996
  location: 台灣

experience:
${translator.experience(`I.X Security
Back End Developer
公司名稱I.X Security
到職日期2019年11月 – 目前
任職期間1 年
地點台灣 台北市
▪ 公司介紹：使用了無線金鑰認證和數據加密通信平台。結合Blockchain機制。提供最高等級的結合軟體以及實體金鑰且具有電子簽核效力的2FA二次身份登錄驗證，所有溝通的資料以及訊息都被加密保護而且做到資料不落地。

▪ 開發維護與經驗：
▫ Microservice：將服務Docker容器化，並進行Kubernets與Istio的設計，改良通信介面至GRPC
▫ File-Service: Node.js 配合 AWS-S3 來設計檔案系統
▫ Chat-Service: Golang 配合 GRPC, Nats, SSE 來讓 APP 端與 GRPC-Web 端溝通
▫ Push-Service: Node.js 配合 FCM/APNS 來推送手機通知
▫ Auth-Service: Node.js 配合橢圓曲線非對稱簽章的驗證系統
▫ Entrance-Service: Node.js 設計 Microservice 的統一進入點
▫ Account-Service: Node.js 配合 DynamoDB, PostgreSQL, Redis 來設計用戶系統
▫ AWS EC2, ELK: 對 Microservice 進行維運與管控
收回
Exosite
QA Engineer
公司名稱Exosite 實習
到職日期2018年7月 - 2019年7月
任職期間1 年 1 個月
地點台中市
▪ 公司介紹：一個Microservice的物連網平台，使用者可將硬體設備直接透過MQTT、Websocket、HTTP等協定將資料回報至此平台進行分析，並且透過網頁進行圖像化呈現。

▪ 開發維護與經驗：
▫ Selenium
▫ Robot Framework
▫ Integration test
▫ QA core auto testing tool
▫ Agile, Scrum
▫ Jenkins: 設計Regression test的pipeline
▫ noVNC: 投射在Docker內部的Robot Framework畫面
收回`)}

education:
- degree: 國立勤益科技大學
  timeperiod: 2016年 – 2019年

# skill level goes 0 to 100
skills:
${translator.skills(`▪ Programming:
▫ Golang
▫ JavaScript, Node.js, TypeScript
▫ Python

▪ Backend:
▫ Kubernetes, Istio, Docker
▫ Microservice, Monolithic
▫ GRPC, GRPC-Web, RESTful API, Websocket, SSE, Nats
▫ Express.js, Koa.js, Nest.js, Gin, Flask
▫ Serverless
▫ AWS EC2, ELK

▪ DB:
▫ PostgreSQL, MySQL
▫ MongoDB, AWS DynamoDB, Redis
▫ AWS S3

▪ DevOps:
▫ Jenkins, Gitlab-CI, Travis
▫ Agile, Scrum
▫ Swagger, Git, Linux

▪ Frontend:
▫ Vue.js, React.js
▫ Redux, Vuex, Redux Observable, Rx.js, jQuery
▫ Electron.js

▪ Security:
▫ 非對稱加密, 對稱加密
▫ 2FA authentication, JWT

▪ Test:
▫ TDD, Jest.js
▫ Selenium, Robot Framework`)}
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
- name: 
  level: 100
projects:
${translator.projects(`2020 it 邦幫忙鐵人賽
2020年9月 – 目前

專案說明▪ 文章網址：https://ithelp.ithome.com.tw/users/20122925/ironman/3537
▪ 內容：介紹講解Golang、Kubernetes、Istio三者在Microservice平台的應用設計。

查看專案 2020 it 邦幫忙鐵人賽查看專案
w3HexSchool 鼠年全馬鐵人挑戰 - 技術文章撰寫
2020年2月 – 目前

專案說明▪ 文章網址：https://ithelp.ithome.com.tw/users/20122925/articles?page=1
▪ 內容：這是由六角學院所推出的 w3HexSchool 活動，長期性寫文活動，透過此活動進而推動自我成長與幫助網路社群。

查看專案 w3HexSchool 鼠年全馬鐵人挑戰 - 技術文章撰寫查看專案
Side project: 鴨發Go! - 前端設計
2017年12月 – 目前

專案說明▪ 原始碼：https://github.com/superj80820/Ahfargo-bus-bot
▪ 內容：Line軟體結合市政公車系統 以提供公車查詢功能，不需要另外安裝App，即可查詢公車。

查看專案 Side project: 鴨發Go! - 前端設計查看專案
Side project: 髒沙發 - 前端設計
2017年6月 – 目前

專案說明▪ 原始碼：https://github.com/superj80820/star-line-bot-admin
▪ 獲獎：獲得Line today、電腦王阿達、新聞雲ETtoday、知名Youtuber報導，約10萬人使用。
▪ 內容：透過Vue.js，使用AJAX與後端交互資料，提供一個介面供管理人員新增女星資料。

查看專案 Side project: 髒沙發 - 前端設計查看專案
Side project: 髒沙發 - 後端設計
2017年6月 – 目前

專案說明▪ 原始碼：https://github.com/superj80820/messfar-line-service
▪ 獲獎：獲得Line today、電腦王阿達、新聞雲ETtoday、知名Youtuber報導，約10萬人使用。
▪ 內容：持續成長中。透過人臉辨識查詢女星，後端原為Flask，現改為Express處理Line Webhook，並提供管理人員的API供Admin前端使用。

查看專案 Side project: 髒沙發 - 後端設計查看專案`)}

contributions:
${translator.contributions(`2019創想星球資訊科技創意大賽 - 第一名
獲獎日期2019年3月1日  頒獎單位朝陽科技大學 資訊管理系

獎項說明使用低成本的器具，將教室投影幕轉為觸控。

LINE-HACK 2018 - 前十名
獲獎日期2018年9月1日  頒獎單位LINE官方

獎項說明參賽組別全約百組，三百人，物聯網與Line進行結合，提供更好的演講平台。

107勤益電子系專題競賽 - 第一名
獲獎日期2017年8月  頒獎單位勤益電子系

獎項說明使用低成本的器具，將教室投影幕轉為觸控。`)}

contact:
  email: superj80820@gmail.com
  phone: 0985698738
  city: 台北
  website: medium.com/髒桶子
  github: superj80820
# en, de, fr, pt, ca, cn, it, es, th, pt-br, ru, sv, id, hu, pl, ja, ka, nl, he, zh-tw, lt, ko, el, nb-no
lang: en
\`
`;

fs.writeFile("data.yml", input, function(err) {
  if (err) return console.log(err);
});
