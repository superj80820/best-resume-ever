const translator = require("./translator");

test("skill", () => {
  const input = `▪ Programming:
▫ JavaScript, Node.js, TypeScript
▫ Golang

▪ Backend:
▫ Microservice, Monolithic`;
  const expectOutput = `- name: "- Programming - JavaScript, Node.js, TypeScript"
  level: 100
- name: "- Programming - Golang"
  level: 100
- name: ---
  level: 100
- name: "- Backend - Microservice, Monolithic"
  level: 100
- name: ---
  level: 100`;

  expect(translator.skills(input)).toBe(expectOutput);
});

test("experience", () => {
  const input = `I.X Security
Back End Developer
公司名稱I.X Security
到職日期2019年11月 – 目前
任職期間1 年
地點台灣 台北市
▪ 公司介紹：使用了無線金鑰認證和數據加密通信平台。結合Blockchain機制。提供最高等級的結合軟體以及實體金鑰且具有電子簽核效力的2FA二次身份登錄驗證，所有溝通的資料以及訊息都被加密保護而且做到資料不落地。

▪ 開發維護與經驗：
▫ File-Service: Node.js 配合 AWS-S3 來設計檔案系統
▫ Chat-Service: Golang 配合 GRPC, Nats, SSE 來讓 APP 端與 GRPC-Web 端溝通
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
收回`;
  const expectOutput = `- company: I.X Security
  position: Back End Developer
  timeperiod: 2019年11月 – 目前
  description:
    - "▪ 公司介紹：使用了無線金鑰認證和數據加密通信平台。結合Blockchain機制。提供最高等級的結合軟體以及實體金鑰且具有電子簽核效力的2FA二次身份登錄驗證，所有溝通的資料以及訊息都被加密保護而且做到資料不落地。"
    - "▪ 開發維護與經驗："
    - "▫ File-Service: Node.js 配合 AWS-S3 來設計檔案系統"
    - "▫ Chat-Service: Golang 配合 GRPC, Nats, SSE 來讓 APP 端與 GRPC-Web 端溝通"
- company: Exosite
  position: QA Engineer
  timeperiod: 2018年7月 - 2019年7月
  description:
    - "▪ 公司介紹：一個Microservice的物連網平台，使用者可將硬體設備直接透過MQTT、Websocket、HTTP等協定將資料回報至此平台進行分析，並且透過網頁進行圖像化呈現。"
    - "▪ 開發維護與經驗："
    - "▫ Selenium"
    - "▫ Robot Framework"`;

  expect(translator.experience(input)).toBe(expectOutput);
});

test("projects", () => {
  const input = `w3HexSchool 鼠年全馬鐵人挑戰 - 技術文章撰寫
2020年2月 – 目前

專案說明▪ 文章網址：https://ithelp.ithome.com.tw/users/20122925/articles?page=1
▪ 內容：這是由六角學院所推出的 w3HexSchool 活動，有如全馬挑戰一般，是屬於常態且長期性寫文活動，透過此活動進而推動自我成長與幫助網路社群。

查看專案 w3HexSchool 鼠年全馬鐵人挑戰 - 技術文章撰寫查看專案
Side project: 鴨發Go! - 前端設計
2017年12月 – 目前

專案說明▪ 原始碼：https://github.com/superj80820/Ahfargo-bus-bot
▪ 內容：Line軟體結合市政公車系統 以提供公車查詢功能，不需要另外安裝App，即可查詢公車。

查看專案 Side project: 鴨發Go! - 前端設計查看專案`;
  const expectOutput = `- name: "w3HexSchool 鼠年全馬鐵人挑戰 - 技術文章撰寫"
  timeperiod: 2020年2月 – 目前
  description:
    - "▪ 文章網址：https://ithelp.ithome.com.tw/users/20122925/articles?page=1"
    - "▪ 內容：這是由六角學院所推出的 w3HexSchool 活動，有如全馬挑戰一般，是屬於常態且長期性寫文活動，透過此活動進而推動自我成長與幫助網路社群。"
- name: "Side project: 鴨發Go! - 前端設計"
  timeperiod: 2017年12月 – 目前
  description:
    - "▪ 原始碼：https://github.com/superj80820/Ahfargo-bus-bot"
    - "▪ 內容：Line軟體結合市政公車系統 以提供公車查詢功能，不需要另外安裝App，即可查詢公車。"
`;

  expect(translator.projects(input)).toBe(expectOutput);
});

test("contributions", () => {
  const input = `2019創想星球資訊科技創意大賽 - 第一名
獲獎日期2019年3月1日  頒獎單位朝陽科技大學 資訊管理系

獎項說明使用低成本的器具，將教室投影幕轉為觸控。

LINE-HACK 2018 - 前十名
獲獎日期2018年9月1日  頒獎單位LINE官方

獎項說明參賽組別全約百組，三百人，物聯網與Line進行結合，提供更好的演講平台。`;
  const expectOutput = `- name: 2019創想星球資訊科技創意大賽 - 第一名
  description:
    - "獲獎日期：2019年3月1日  頒獎單位朝陽科技大學 資訊管理系"
    - "獎項說明：使用低成本的器具，將教室投影幕轉為觸控。"
- name: LINE-HACK 2018 - 前十名
  description:
    - "獲獎日期：2018年9月1日  頒獎單位LINE官方"
    - "獎項說明：參賽組別全約百組，三百人，物聯網與Line進行結合，提供更好的演講平台。"`;

  expect(translator.contributions(input)).toBe(expectOutput);
});
