export default class Tabs {
  constructor(container, tabs, content) {
    this.container = document.querySelector(container);
    this.tabs = this.container.querySelectorAll(tabs);
    this.content = this.container.querySelectorAll(content);
  }
  deactivate() {
    this.tabs.forEach((item) => {
      item.classList.remove(this.tabActiveClass);
    });
    this.content.forEach((item) => {
      item.classList.remove(this.contentActiveClass);
    });
  }

  activate(i) {
    this.tabs.forEach((item, index) => {
      if(index === i) {
        item.classList.add(this.tabActiveClass);
      }
    });
    this.content.forEach((item, index) => {
      if(index === i) {
        item.classList.add(this.contentActiveClass);
      }
    });
  }
}
