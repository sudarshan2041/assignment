import React from "react";
import "./style.scss";
function Input({
  label,
  type,
  name,
  handleChange,
  handleselect,
  showPassword,
}) {
  return (
    <div>
      <div>
        <div className="seprator">
          <label className="label">{label}:</label>
          {type === "text" && (
            <input
              type="text"
              name={name}
              className="input"
              placeholder={label}
              onChange={handleChange}
            />
          )}

          {type === "email" && (
            <input
              type="email"
              name={name}
              className="input"
              placeholder={label}
              onChange={handleChange}
            />
          )}

          {type === "textarea" && (
            <textarea
              type="textarea"
              rows="4"
              cols="36"
              name={name}
              placeholder={label}
              onChange={handleChange}
            />
          )}

          {type === "password" && (
            <input
              type={showPassword ? "text" : "password"}
              name={name}
              className="input"
              placeholder={label}
              onChange={handleChange}
            />
          )}

          {type === "password" && (
            <div className="checkBox">
              <input type="checkbox" onClick={handleselect} />
              <span>Show Password</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;
