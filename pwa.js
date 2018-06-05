!(() => {
  window.addEventListener('load', e => {
    let defferEvent;
    const installButton = document.getElementById('installButton');
    installButton.hidden = true;
    
    window.addEventListener('beforeinstallprompt', e => {
      console.log('beforeinstallprompt', e);
      delete installButton.hidden;
      defferEvent = e;
      e.preventDefault();
      return false;
    });

    installButton.addEventListener('click', async e => {
      installButton.hidden = true;
      console.log('click', e);
      await defferEvent.prompt();
      const result = await defferEvent.userChoise;
      console.log(result);
    });
  });
})();