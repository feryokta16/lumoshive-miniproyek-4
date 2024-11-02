import React from "react";

export default function StudentDetail({ detail, onClose }) {
  if (!detail) return null;
  return (
    <div>
      <form className="form-control">
        <button onClick={onClose} className="btn btn-primary mx-2 my-2">
          <i className="bi bi-x"></i>
          close
        </button>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" value={detail.name} className="form-control" />
        </div>
        <div>
          <label htmlFor="class">Class</label>
          <input type="text" value={detail.class} className="form-control" />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input type="text" value={detail.year} className="form-control" />
        </div>
        <div>
          <label htmlFor="nim">Nim</label>
          <input
            type="text"
            name="name"
            id="name"
            value={detail.nim}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="birtd">Birthdate</label>
          <input
            type="date"
            name="name"
            id="name"
            value={detail.birthDate}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="name">Guardian Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={detail.guardian_name}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="name">Gender</label>
          <input
            type="text"
            name="name"
            id="name"
            value={detail.gender}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="name">Alamat</label>
          <textarea
            name=""
            value={detail.address}
            className="form-control"
            id=""
          ></textarea>
        </div>
      </form>
    </div>
  );
}
