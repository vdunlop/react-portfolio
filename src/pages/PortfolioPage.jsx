import "./style.css";
import project from "../projects";

export default function PortfolioPage() {
  return (
    <div class="container">
      <h3>Portfolio</h3>

      <div class="row">
        {project.map((props) => (
          <div class="card col-md-6 col-lg-4 col-xl-3">
            <p>
              <a href={props.deployed}>
                <img
                  class="images"
                  src={props.image}
                  alt="Image goes here"
                ></img>
              </a>
            </p>
            <div class="text-block"><h4>{props.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
