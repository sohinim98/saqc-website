import React, { useState }  from "react"
import axios from "axios";
import "./contact.css"

const MyForm = () => {

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/20852396-3129-4190-b388-39e6b2c912f7",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thank you for signing up for our newsletter! We are grateful.", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
      <div>
        <div>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <input type="text" className="name" name="name" placeholder="Your Name" required="required"/>
              <input type="email" className="email" name="email" aria-describedby="emailHelp" placeholder="Your Email"/>
              <button type="submit" className="btn btn-primary"  disabled={serverState.submitting}>
                ⟩
              </button>
            </div>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
  );
};

export default MyForm;
