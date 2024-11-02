// src/StudentTable.jsx
import React from "react";

export default function StudentTable({ data, onRemove, viewDetail }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <td colSpan="10">
            <button className="btn btn-primary text-white">
              <i className="bi bi bi-plus-circle-dotted"></i>Add Data
            </button>
          </td>
        </tr>
        <tr>
          <th>NIM</th>
          <th>Name</th>
          <th>Class</th>
          <th>Birth Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((student) => (
            <tr key={student.id}>
              <td>{student.nim}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.birthDate}</td>
              <td>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => onRemove(student.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => viewDetail(student.id)}
                >
                  <i className="bi bi-pencil"></i>
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="10">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
