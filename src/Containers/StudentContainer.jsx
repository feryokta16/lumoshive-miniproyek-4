// src/StudentContainer.jsx
import React, { Component } from "react";
import { fetchData, deleteData, fetchDetailData } from "../utils/api"; // Import fungsi fetchData
import StudentTable from "../Components/StudentTable";
import StudentDetail from "../Components/StudentDetail";

class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: "",
      detail: null,
      isDetailVisible: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }
  loadData = async () => {
    try {
      const responseData = await fetchData();
      this.setState({ data: responseData, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };
  removeStudent = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      try {
        await deleteData(id);
        this.setState((prevState) => ({
          data: prevState.data.filter((item) => item.id !== id),
        }));
        alert("Data berhasil dihapus");
      } catch (error) {
        console.error("Terjadi kesalahan saat menghapus data:", error);
      }
    }
  };
  handleViewDetail = async (id) => {
    try {
      const detail = await fetchDetailData(id);
      this.setState({ detail, isDetailVisible: true });
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil detail data:", error);
    }
  };

  handleCloseDetail = () => {
    this.setState({ detail: null });
  };
  render() {
    const { data, loading, error } = this.state;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
      <div>
        <StudentTable
          data={data}
          onRemove={this.removeStudent}
          viewDetail={this.handleViewDetail}
        />
        {this.state.isDetailVisible && (
          <StudentDetail
            detail={this.state.detail}
            onClose={this.handleCloseDetail}
          />
        )}
      </div>
    );
  }
}

export default StudentContainer;
