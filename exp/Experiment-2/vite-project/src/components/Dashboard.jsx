function Dashboard() {
  return (
    <div className="container mt-4">
      <div className="row text-center">
        <div className="col-md-4 bg-primary text-white p-4">
          Users
        </div>
        <div className="col-md-4 bg-success text-white p-4">
          Sales
        </div>
        <div className="col-md-4 bg-warning text-dark p-4">
          Revenue
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
