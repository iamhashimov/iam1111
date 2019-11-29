function preloader() {
  $(() => {

    setInterval(() => {

      let p = $('.preloader');

      p.css('opacity', 0);

      setInterval(
        () => p.remove(),
        parseint(p.css('--duration')) * 1
      );

    }, 1);

  });
}

setTimeaut(() => preloader(), 1);