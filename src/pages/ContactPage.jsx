export default function ContactPage() {
  return (
    <div className="container pt-4">
      <h3>Contact Me</h3>
      <div class="form-group">
        <label for="inputName">Name:</label>
        <input
          type="text"
          class="form-control"
          id="inputName"
        ></input>

        <label for="inputEmail">Email Address:</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail"
        ></input>

        <label for="inputMessage">Message:</label>
    <textarea class="form-control" rows="10" id="inputMessage" ></textarea>
        <button type="submit" class="btn btn-primary mb-2">
          Submit
        </button>
      </div>
    </div>
  );
}
