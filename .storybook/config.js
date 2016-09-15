import { configure } from '@kadira/storybook';

function loadStories() {
  require('../app/components/stories/index.js');
}

configure(loadStories, module);
