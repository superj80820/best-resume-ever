const mapCleanAllNewline = (item) => item.replace(/\n/g, "");
const filterEmptyString = (item) => item != "";
const filterEmptyArray = (item) => item.length !== 0;

const skills = (input) =>
  input
    .split("▪ ")
    .filter(filterEmptyString)
    .map((item) => item.split(":\n"))
    .reduce((acc, item) => [...acc, item, ["", "▫ ---"]], [])

    .flatMap(([title, value]) =>
      value
        .split("▫ ")
        .filter(filterEmptyString)
        .map(mapCleanAllNewline)
        .map((item) => (item !== "---" ? `"- ${title} - ${item}"` : item))
    )
    .map((item) => `- name: ${item}\n  level: 100`)
    .join("\n");

const experience = (input) =>
  input
    .split("\n收回")
    .map((item) =>
      item
        .replace("公司名稱", "")
        .replace("到職日期", "")
        .split("\n")
        .filter(filterEmptyString)
    )
    .filter(filterEmptyArray)
    .map(
      ([
        company,
        position,
        ,
        timeperiod,
        ,
        ,
        ...description
      ]) => `- company: ${company}
  position: ${position}
  timeperiod: ${timeperiod}
  description:\n${description
    .filter(filterEmptyString)
    .map((item) => `    - "${item}"`)
    .join("\n")}`
    )
    .join("\n");

const projects = (input) =>
  input
    .split("查看專案\n")
    .map((item) => item.replace("專案說明", ""))
    .map((item) => item.split("\n").filter(filterEmptyString))
    .map((item) => item.slice(0, item.length - 1))
    .map(
      ([name, timeperiod, ...description]) => `- name: "${name}"
  timeperiod: ${timeperiod}
  description:\n${description.map((item) => `    - "${item}"\n`).join("")}`
    )
    .join("");

const contributions = (input) =>
  input
    .replace(/獲獎日期/g, "獲獎日期：")
    .replace(/獎項說明/g, "獎項說明：")
    .split("\n")
    .filter(filterEmptyString)
    .reduce(
      (acc, _, index, arr) =>
        index % 3 === 0
          ? [...acc, [arr[index], arr[index + 1], arr[index + 2]]]
          : acc,
      []
    )
    .map(
      ([name, ...description]) => `- name: ${name}
  description:\n${description.map((item) => `    - "${item}"`).join("\n")}`
    )
    .join("\n");

module.exports = {
  skills,
  experience,
  projects,
  contributions,
};
