import React from 'react';

function FeedbackForm() {
  return (
    <div className="feedback mt-5">
      <div className="container">
        <h2 className="text-center p-5 text-light">Book Your Table</h2>
        <form action="" className="">
        <div class="inputcontent row g-3">
              <div class="col-md-4">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Your Name*"
                />
              </div>
              <div class="col-md-4">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Your Name*"
                />
              </div>
              <div class="col-md-4">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Your Name*"
                />
              </div>
            </div>
            <div class="coment mt-5">
              <textarea
                // style="height: 150px; width: 100%"
                style={{height: 150, width: "100%"}}
                placeholder="Your comment here..."
              ></textarea>
            </div>
            <input
              type="submit"
              class="btn btn-warning text-white mt-2"
              value="Send Message"
            />
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
