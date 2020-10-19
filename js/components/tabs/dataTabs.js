import Tabs from './tab';

export default class dataTabs extends Tabs {
  constructor(container, tabs, content, tabActiveClass) {
    super(container, tabs, content);
  }
  init() {
    this.deactivate();
    this.activate(0);
  }
}
