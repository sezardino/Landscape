import Tabs from './tab';

export default class ContentTabs extends Tabs {
  constructor(container, tabs, content, tabActiveClass, contentActiveClass) {
    super(container, tabs, content);
    this.tabActiveClass = tabActiveClass;
    this.contentActiveClass = contentActiveClass;
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
