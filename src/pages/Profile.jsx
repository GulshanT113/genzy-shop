import React, { useState } from "react";
import IMG from "../assets/userDP.jpg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  // Profile State
  const [profile, setProfile] = useState({
    name: "Gulshan Thakur",
    customerId: "CUST12345",
    email: "gulshan@email.com",
    phone: "+91 9876543210",
    age: "24",
    totalOrders: "18",
    address: "123, Alipura Main Road, Meerut, Uttar Pradesh, India",
    upi: "gulshan@upi",
    vouchers: "1500",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Save Changes
  const handleSave = () => {
    setIsEdit(false);
  };

  return (
    <div>
      <div className=" mt-4">
        <div className="row">
          {/* Left Profile Card */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm text-center">
              <img src={IMG} alt="Profile" />
            </div>
            <div className="text-center p-2">
              {isEdit ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="form-control text-center mb-2"
                />
              ) : (
                <h4 className="mb-1 fw-bold">{profile.name}</h4>
              )}

              <p className="text-muted mb-2 fw-bold">
                Customer ID: {profile.customerId}
              </p>
              <span className="badge bg-success fs-6">Active Member</span>
            </div>
          </div>

          {/* Right Details Section */}
          <div className="col-md-8">
            <div className="card shadow-sm p-4">
              <h5 className="mb-3 fw-bold">Personal Details</h5>

              <div className="row mb-3">
                <div className="col-sm-6">
                  <strong>Email:</strong>
                  {isEdit ? (
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                  ) : (
                    <p className="text-primary fw-bold">{profile.email}</p>
                  )}
                </div>

                <div className="col-sm-6">
                  <strong>Phone:</strong>
                  {isEdit ? (
                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                      className="form-control"
                    />
                  ) : (
                    <p className="text-primary fw-bold">{profile.phone}</p>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-6">
                  <strong>Age:</strong>
                  {isEdit ? (
                    <input
                      type="number"
                      name="age"
                      value={profile.age}
                      onChange={handleChange}
                      className="form-control"
                    />
                  ) : (
                    <p className="text-primary fw-bold">{profile.age} Years</p>
                  )}
                </div>

                <div className="col-sm-6">
                  <strong>Total Orders:</strong>
                  <p className="text-primary fw-bold">
                    {profile.totalOrders} Orders
                  </p>
                </div>
              </div>

              <div className="mb-3">
                <strong>Address:</strong>
                {isEdit ? (
                  <textarea
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  <p className="text-primary fw-bold">{profile.address}</p>
                )}
              </div>

              <hr />

              <h5 className="mb-3 fw-bold">Account & Payments</h5>

              <div className="row mb-3">
                <div className="col-sm-6">
                  <strong>UPI ID:</strong>
                  {isEdit ? (
                    <input
                      type="text"
                      name="upi"
                      value={profile.upi}
                      onChange={handleChange}
                      className="form-control"
                    />
                  ) : (
                    <p className="text-primary fw-bold">{profile.upi}</p>
                  )}
                </div>

                <div className="col-sm-6">
                  <strong>Gift & Vouchers:</strong>
                  <p className="text-success fw-bold">
                    ₹{profile.vouchers} Available
                  </p>
                </div>
              </div>

              <div className="mb-3">
                <strong>Your Lists:</strong>
                <ul className="list-group">
                  <li className="list-group-item">Wishlist (5 items)</li>
                  <li className="list-group-item">Saved for Later (3 items)</li>
                  <li className="list-group-item">
                    Recently Viewed (12 items)
                  </li>
                </ul>
              </div>

              <div className="text-end">
                {isEdit ? (
                  <>
                    <button
                      className="btn btn-success me-2"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setIsEdit(false)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => setIsEdit(true)}
                    >
                      Edit Profile
                    </button>
                    <button
                      onClick={() => {
                        navigate("/");
                      }}
                      className="btn btn-outline-danger"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* End Right Section */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
