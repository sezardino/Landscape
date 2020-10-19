import Tabs from './components/tabs/tab';
import ContentTabs from './components/tabs/contentTabs';

// new Tabs({
//     container: '.works',
//     tab: '.works__counter-item',
//     content: '.works__content-wrapper',
//     tabActiveClass: 'works__counter-item--active',
//     contentActiveClass:'works__content-wrapper--active'
// }).init();
// new Tabs({
//     container: '.projects',
//     tab: '.tab',
//     content: '.works__content-wrapper',
//     tabActiveClass: 'tab--active',
//     contentActiveClass:'works__content-wrapper--active'
// }).init();
new ContentTabs(
	'.works',
	'.works__counter-item',
	'.works__content-wrapper',
	'works__counter-item--active',
	'works__content-wrapper--active'
).init();
new DatatTabs(
	'.projects',
	'.tabs',
	'.gallery',
	'tab--active',
	'works__content-wrapper--active'
).init();
