new Vue({
    el: '#app',
    data: {
      countup: 0,
      maxAttempts: 7,
      backgroundImagePath: 'img/foto4.svg',
      motivationalSentence: 'Anfänger'
    },
    methods: {
      increaseCountup() {
        if (this.countup < this.maxAttempts) {
          this.countup++;
        } else {
          // Wenn countup 7 erreicht, setze ihn zurück
          this.resetCountup();
        }

        // Hintergrund und motivierende Sätze anpassen
        if (this.countup === 0) {
          this.setBackgroundAndSentence('img/foto4.svg', 'Anfänger', 'rgb(96, 32, 15)'); //red1
        } else if (this.countup === 1) {
          this.setBackgroundAndSentence('img/foto4.svg', 'Anfänger', 'rgb(150, 40, 10)');// red2
        } else if (this.countup === 2) {
          this.setBackgroundAndSentence('img/foto3.svg', 'Junior', 'rgb(201, 78, 22)');// orange1
        } else if (this.countup === 3) {
          this.setBackgroundAndSentence('img/foto3.svg', 'Junior', 'rgb(255, 136, 49');//orange2
        } else if (this.countup === 4) {
          this.setBackgroundAndSentence('img/foto2.svg', 'Fortgeschritten', 'rgb(185, 158, 6)');//gelb1
        } else if (this.countup === 5) {
          this.setBackgroundAndSentence('img/foto2.svg', 'Fortgeschritten', 'rgb(213, 184, 21)');//gelb2
        }  else if (this.countup === 6) {
          this.setBackgroundAndSentence('img/foto1.svg', 'Profi', 'rgb(46, 96, 21)');//grün1
        }else if (this.countup === 7) {
          this.setBackgroundAndSentence('img/foto1.svg', 'Expert', 'rgb(73, 135, 42)');//grün2
        }
      },
      resetCountup() {
        this.countup = 0;
        this.backgroundImagePath = 'img/foto4.svg';
        this.motivationalSentence = 'Anfänger';
        document.body.style.backgroundColor = 'rgb(96, 32, 15)';
      },
      setBackgroundAndSentence(imagePath, sentence, backgroundColor) {
        this.backgroundImagePath = imagePath;
        this.motivationalSentence = sentence;
        document.body.style.backgroundColor = backgroundColor;
      }
    }
  });