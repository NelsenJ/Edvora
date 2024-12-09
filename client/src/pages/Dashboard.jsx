import React from "react";

const Dashboard = () => {
  return (
    <div className="container">
      {/* Statistik dan Pie Chart */}
      <div className="row mb-4">
        {/* Kolom Statistik */}
        <div className="col-lg-8 d-flex flex-column">
          {/* 4 Box Statistik */}
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <p className="fw-bold">Ongoing</p>
                  <h4 className="text-primary">5</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <p className="fw-bold">Complete</p>
                  <h4 className="text-success">37</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <p className="fw-bold">Certificate</p>
                  <h4 className="text-warning">25</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <p className="fw-bold">Hour Spent</p>
                  <h4 className="text-info">705</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Course */}
          <h5 className="mb-3">Popular Course</h5>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <p>Course 1</p>
                  <p className="text-muted">Details of the course</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <p>Course 2</p>
                  <p className="text-muted">Details of the course</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <p>Course 3</p>
                  <p className="text-muted">Details of the course</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Pie Chart */}
        <div className="col-lg-4">
          <div className="card h-100 d-flex flex-column justify-content-center">
            <div className="card-body text-center">
              <p className="fw-bold">Course Topic</p>
              <div
                style={{
                  height: "250px",
                  width: "250px",
                  background: "#f0f0f0",
                  borderRadius: "50%",
                  margin: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Pie Chart
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Course & Continue Learning */}
      <div className="row">
        {/* My Course */}
        <div className="col-lg-8">
          <h5 className="mb-3">My Course</h5>
          <div className="card">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Lessons</th>
                    <th>Status</th>
                    <th>Level</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Mastering Design System",
                      "15/15",
                      "Complete",
                      "Intermediate",
                      "Design",
                    ],
                    [
                      "UI/UX Design",
                      "12/15",
                      "Ongoing",
                      "Beginner",
                      "Design",
                    ],
                    [
                      "Learn Data Analyst",
                      "8/20",
                      "Ongoing",
                      "Expert",
                      "Data",
                    ],
                  ].map((course, index) => (
                    <tr key={index}>
                      {course.map((data, i) => (
                        <td key={i}>{data}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Continue Learning */}
        <div className="col-lg-4">
          <h5>Continue Learning</h5>
          {["Course 1", "Course 2", "Course 3"].map((course, index) => (
            <div className="card mb-3" key={index}>
              <div className="card-body d-flex justify-content-between">
                <p>{course}</p>
                <p>Progress</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
