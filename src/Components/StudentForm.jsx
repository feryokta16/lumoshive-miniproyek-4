import React from "react";

const StudentForm = () => {
  return (
    <div>
      <form className="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="form-control" />
          <label htmlFor="class">Class</label>
          <input type="text" name="class" id="class" className="form-control" />
          <label htmlFor="name">Year</label>
          <input type="date" min="2000" max="2024" className="form-control" />
          <label htmlFor="name">Nim</label>
          <input type="text" inputMode="number" className="form-control" />
          <label htmlFor="name">Guardian Name</label>
          <input type="text" className="form-control" />
          <label htmlFor="name">Birth Date</label>
          <input type="date" className="form-control" />
          <label htmlFor="name">Adress</label>
          <textarea name="" id="" className="form-control"></textarea>
          <label htmlFor="name">gender</label>
          <input type="text" className="form-control mb-2" />
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
