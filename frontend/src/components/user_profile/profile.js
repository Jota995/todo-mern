import React from "react";

const Profile = () => {
  return (
    <div className="row">
      <div className="col-2">
        <div className="row">
          <img
            src="https://as2.ftcdn.net/jpg/01/26/63/11/500_F_126631173_W9Nq8ZA5s0R0M3ZIBx3BMytVIFseGa9c.jpg"
            width="200"
            alt="user"
          />
        </div>
        <div className="row">
          <h4>User Name</h4>
        </div>
        <div className="row mb-3">
          <h5>Type User</h5>
        </div>
        <div className="row mb-3">
          <span className="w-100 border-bottom"></span>
        </div>
        <div className="row">
          <h6>User Gender</h6>
        </div>
        <div className="row mb-3">
          <h6>User Country</h6>
        </div>
        <div className="row mb-3">
          <span className="w-100 border-bottom"></span>
        </div>
        <div className="row">
          <button className="btn btn-primary btn-block btn-sm">
            Edit my Profile
          </button>
        </div>
      </div>
      <div className="col-10">
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <h5 className="card-header">About me</h5>
              <div className="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur quos cumque quaerat deleniti enim cum quas harum
                similique recusandae, inventore sunt omnis a eius rem fugiat
                tenetur tempora totam expedita?
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <div className="card">
              <h5 className="card-header"> My Activity</h5>
              <div className="card-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                nihil impedit eaque deleniti, incidunt odit repudiandae minus?
                Labore, magnam! Possimus!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
