function Modal(props) {
    return (
      // eslint-disable-next-line react/prop-types
      <div className="modal-container" onClick={props.onCancel}>
        <div className="modal">
            <p>Are you sure?</p>
            <div className="btn-wrapper">
              <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
              <button className="btn " onClick={props.onConfirm}>Confirm</button>
            </div>
          </div>
        
      </div>
    );
  }

  export default Modal;
  