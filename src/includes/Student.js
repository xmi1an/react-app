function Student(prop) {
  return (
    <div>
      <div class="card bg-light">
        <div class="card-body">
          <h5 class="card-title">Hello {prop.name}</h5>
          <p class="card-text">Address : {prop.other.address}</p>
          <p class="card-text">Mobile : {prop.other.mobile}</p>
        </div>
      </div>
    </div>
  );
}

export default Student;
