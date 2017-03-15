import './manifest.json';
import './resources/icon16.png';
import './resources/icon48.png';
import './resources/icon128.png';

import { createFolder } from './listeners/install';
import { restoreTabs } from './listeners/command';

chrome.runtime.onInstalled.addListener(createFolder);
chrome.commands.onCommand.addListener(restoreTabs);
