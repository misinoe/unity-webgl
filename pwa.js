!(() => {
  let defferEvent;
  window.addEventListener('beforeinstallprompt', e => {
    console.log(e);
    defferEvent = e;
    e.preventDefault();
    return false;
  });

  window.addEventListener('load', e => {
    console.log(e);
    const installButton = document.getElementById('installButton');
    installButton.addEventListener('click', async e => {
      console.log(e);
      await defferEvent.prompt();
      const result = await defferEvent.userChoise;
      console.log(result);
    });
  });
})();