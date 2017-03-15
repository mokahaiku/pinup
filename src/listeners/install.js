// eslint-disable-next-line import/prefer-default-export
export const createFolder = () => {
  chrome.storage.sync.get({ title: '💃' }, ({ title }) => {
    chrome.bookmarks.search({ title }, (folders) => {
      const { id } = folders[0];
      chrome.bookmarks.getChildren(id, (results) => {
        results.forEach(({ url }, index) => {
          chrome.tabs.create({
            index,
            url,
            pinned: true,
          });
        });
      });
    });
  });
};
