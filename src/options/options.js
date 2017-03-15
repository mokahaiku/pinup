import './options.pug';
import './options.scss';

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get({
    title: '💃',
  }, ({ title }) => {
    document.querySelector('.js-folder-name').value = title;
  });
});

document.querySelector('.js-folder-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const sendMessage = (type, message) => {
    const ref = document.querySelector('.js-folder-message');
    ref.classList.add(type);
    ref.textContent = message;
    setTimeout(() => {
      ref.textContent = '';
      ref.classList.remove(type);
    }, 2000);
  };
  const title = document.querySelector('.js-folder-name').value;
  if (!title.length) return sendMessage('error', 'Folder name can\'t be empty!');
  return chrome.storage.sync.set({ title }, () =>
    sendMessage('success', 'Folder name saved successfully!'));
});
