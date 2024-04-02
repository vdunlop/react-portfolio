const styles = {
  footerStyle: {
    background: "blue",
  },
  footingStyle: {
    fontSize: "100px",
  },
};

function Footer() {
  return (
    <div>
      <footer class="container d-inline-flex justify-content-center">
        <div class="row">
          <div class="col-md-6 col-lg-4 col-xl-3">
            <a href="https://github.com/vdunlop" target="_blank">
              <img src="/Assets/githubsm.jpg"></img>
            </a>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3">
            <a href="https://www.linkedin.com" target="_blank">
              <img src="/Assets/linkedinsm.jpg"></img>
            </a>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3">
            <a href="https://www.facebook.com" target="_blank">
              <img src="/Assets/facebooksm.jpg"></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
