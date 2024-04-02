import "./style.css";
import project from "../projects";

export default function PortfolioPage() {
  return (
    <div class="container">
      <h3>Portfolio</h3>

      <div class="row">
        {project.map((props) => (
          <div class="col-md-6 col-lg-4 col-xl-3">
            <p>
              <a href={props.link}>
                <img
                  class="images"
                  src={props.image}
                  alt="Image goes here"
                ></img>
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
