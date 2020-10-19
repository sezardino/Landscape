export default class Tabs {
  constructor({container, tab, content, tabActiveClass, contentActiveClass}) {
    this.container = document.querySelector(container);
    this.tabs = this.container.querySelectorAll(tab);
    this.content = this.container.querySelectorAll(content);
    this.tabActiveClass = tabActiveClass;
    this.contentActiveClass = contentActiveClass;
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

  bindTrigers() {
    this.tabs.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.deactivate();
        this.activate(index);
      });
    });
    this.content.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.deactivate();
        this.activate(index);
      });
    });
  }

  init() {
    this.deactivate();
    this.activate(0);
    this.bindTrigers();
  }
}
