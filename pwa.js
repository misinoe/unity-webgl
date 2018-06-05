!(() => {
  let defferEvent;
  window.addEventListener('beforeinstallprompt', e => {
    console.log('beforeinstallprompt', e);
    defferEvent = e;
    e.preventDefault();
    return false;
  });

  window.addEventListener('load', e => {
    console.log('load', e);
    const installButton = document.getElementById('installButton');
    installButton.hidden = true;
    installButton.addEventListener('click', async e => {
      delete installButton.hidden;
      console.log('click', e);
      await defferEvent.prompt();
      const result = await defferEvent.userChoise;
      console.log(result);
    });
  });
})();