import "./style.css";

export default function PortfolioPage() {
  return (
    <div class="container">
      <h3>Portfolio</h3>

      <div class="row g-3">
        <div class="col-md-6 col-lg-4 col-xl-3">
          <p>
            <a href="https://github.com/vdunlop/password-generator/">
              <img
                class="images"
                src="/Assets/password-generator.jpg"
                alt="Image goes here"
              ></img>
            </a>
          </p>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <p>
            <a href="https://github.com/vdunlop/workday-scheduler/">
              <img
                class="images"
                src="/Assets/workday-scheduler.jpg"
                alt="Image goes here"
              ></img>
            </a>
          </p>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <p>
            <a href="https://github.com/vdunlop/weather-dashboard/">
              <img
                class="images"
                src="/Assets/weather-dashboard.jpg"
                alt="Image goes here"
              ></img>
            </a>
          </p>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <p>
            <a href="https://github.com/index-al/Choose-Your-Own-AI-venture/">
              <img
                class="images"
                src="/Assets/AIVenture.png"
                alt="Image goes here"
              ></img>
            </a>
          </p>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <p>
            <a href="https://github.com/vdunlop/note-taker/">
              <img
                class="images"
                src="/Assets/note-taker.jpg"
                alt="Image goes here"
              ></img>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
