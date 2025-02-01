import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./searchModal.css";
// eslint-disable-next-line react/prop-types
export default function SearchModel({ handleHideModal, isVisible }) {
  const modalClass = isVisible
    ? "modal fade search-modal-area show modal-custom show"
    : "modal fade search-modal-area modal-custom";
  return (
    <>
      <div
        className={modalClass}
        id="exampleModalsrc"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              data-bs-dismiss="modal"
              className="closer-btn"
              onClick={handleHideModal}
            >
              <i className="ri-close-line"></i>
            </button>

            <div className="modal-body">
              <form className="search-box">
                <div className="search-input">
                  <input
                    type="text"
                    name="Search"
                    placeholder="Search for..."
                    className="form-control"
                  />

                  <button type="submit" className="search-btn">
                    <i className="ri-search-line"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
