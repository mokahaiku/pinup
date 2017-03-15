// eslint-disable-next-line import/prefer-default-export
export const restoreTabs = () => {
  chrome.storage.sync.get({ title: '💃' }, ({ title }) => {
    chrome.bookmarks.search({ title }, (folders) => {
      if (folders.length) return;
      chrome.bookmarks.create({
        parentId: '1',
        index: 0,
        title,
      });
    });
  });
};
