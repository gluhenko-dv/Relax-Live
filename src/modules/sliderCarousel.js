const sliderCarouselFunc = () => {
  class SliderCarousel {
    constructor({
      main,
      wrap,
      next,
      prev,
      position = 0,
      slidesToShow = 4,
      responsive = [],
      infinity = false,
    }) {
      if (!wrap || !main) {
        console.warn("SLIDER: Передай свойства main и wrap!");
      }

      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.next = document.getElementById(next);
      this.prev = document.getElementById(prev);
      this.slidesToShow = slidesToShow;
      this.infinity = infinity;
      this.option = {
        position,
        widthSlide: Math.floor(100 / this.slidesToShow),
      };
      this.responsive = responsive;
    }

    init() {
      this.addGloClass();
      this.addStyle();
      if (this.next && this.prev) {
        this.controlSlider();
      } else {
        this.addArrow();
        this.controlSlider();
      }
      if (this.responsive) {
        this.responseInit();
      }
    }

    addGloClass() {
      this.main.classList.add("glo-slider");
      this.wrap.classList.add("glo-slider__wrap");
      for (const item of this.slides) {
        item.classList.add("glo-slider__item");
      }
    }

    addStyle() {
      let style = document.getElementById("sliderCarousel-style");

      if (!style) {
        style = document.createElement("style");
        style.id = "sliderCarousel-style";
        document.head.appendChild(style);
      }

      style.textContent = `
    .glo-slider {
      overflow: hidden !important;
    }
    .glo-slider__wrap {
      display: flex !important;
      transition: transform 0.5s !important;
      will-change: transform !important;
    }
    .glo-slider__item{
      display: flex !important;
      align-items: center;
      justify-content: center;
      flex: 0 0 ${this.option.widthSlide}% !important;
      margin: auto 0 !important;
    }
    .glo-slider__prev,
    .glo-slider__next{
      margin: 0 10px;
      border: 20px solid transparent;
      background: transparent;
    }
    .glo-slider__prev{
      border-right-color: #19b5fe;
    }
    .glo-slider__next{
      border-left-color: #19b5fe;
    }
    .glo-slider__prev:hover,
    .glo-slider__next:hover,
    .glo-slider__prev:focus,
    .glo-slider__next:focus{
      background: transparent;
    }
    `;
    }

    controlSlider() {
      this.prev.addEventListener("click", this.prevSlider.bind(this));
      this.next.addEventListener("click", this.nextSlider.bind(this));
    }

    prevSlider() {
      if (this.infinity || this.option.position > 0) {
        --this.option.position;
        if (this.option.position < 0) {
          this.option.position = this.slides.length - this.slidesToShow;
        }
        this.wrap.style.transform = `translateX(-${
          this.option.position * this.option.widthSlide
        }%)`;
      }
    }

    nextSlider() {
      if (
        this.infinity ||
        this.option.position < this.slides.length - this.slidesToShow
      ) {
        ++this.option.position;
        if (this.option.position > this.slides.length - this.slidesToShow) {
          this.option.position = 0;
        }
        this.wrap.style.transform = `translateX(-${
          this.option.position * this.option.widthSlide
        }%)`;
      }
    }

    addArrow() {
      this.prev = document.createElement("button");
      this.next = document.createElement("button");

      this.prev.className = "glo-slider__prev";
      this.next.className = "glo-slider__next";

      this.main.appendChild(this.prev);
      this.main.appendChild(this.next);
    }

    responseInit() {
      const slidesToShowDefault = this.slidesToShow;
      const allResponse = this.responsive.map((item) => item.breakpoint);
      const maxResponse = Math.max(...allResponse);

      const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < maxResponse) {
          for (let i = 0; i < allResponse.length; i++) {
            if (widthWindow < allResponse[i]) {
              this.slidesToShow = this.responsive[i].slidesToShow;
              this.option.widthSlide = Math.floor(100 / this.slidesToShow);
              this.addStyle();
            }
          }
        } else {
          this.slidesToShow = slidesToShowDefault;
          this.option.widthSlide = Math.floor(100 / this.slidesToShow);
          this.addStyle();
        }
      };

      checkResponse();
    }
  }

  const partnersCarousel = new SliderCarousel({
    main: ".partners-wrapper",
    wrap: ".partners-slider",
    infinity: true,
    prev: "partners-arrow_left",
    next: "partners-arrow_right",
    responsive: [
      {
        breakpoint: 1024,
        slidesToShow: 3,
      },
      {
        breakpoint: 768,
        slidesToShow: 2,
      },
      {
        breakpoint: 576,
        slidesToShow: 1,
      },
    ],
  });
  partnersCarousel.init();
};

sliderCarouselFunc();
export default sliderCarouselFunc;
