import React, { useEffect } from "react";
import Customer from "../components/Customer";
import { Button } from "@mui/material";
import GlobalStyles from "@mui/material";
import { fetchUsers } from "../store/Action";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const users = useSelector((user) => user.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    ////console.log('listuser',users)
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "20%",
          backgroundColor: "#00564a",
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <h1 style={internalStyle.txt}>SAVIYNT</h1>
        <div style={{ marginTop: "20px", marginLeft: "50px" }}>
          <Button
            style={internalStyle.styleButton}
            variant="contained"
            color="success"
          >
            Customers
          </Button>
        </div>
      </div>
      <div style={{ width: "80%" }}>
        <h1 style={internalStyle.style} className="text-red-500">
          CUSTOMERS
        </h1>
        <div style={{ backgroundColor: "#f3f5fa", height: "100vh" }}>
          <Button
            style={internalStyle.styleButton}
            variant="contained"
            color="success"
          >
            Add New Customer
          </Button>
          <div style={internalStyle.styleButton}>
            <Customer />
          </div>
        </div>
      </div>
    {/* {users.map((item)=>{
      return(<h1 key={item.id}>{item.id}</h1>)
    })} */}
    </div>
  );
};
const internalStyle = {
  style: {
    marginTop: "40px",
    marginBottom: "40px",
    marginLeft: "20px",
  },
  styleButton: {
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "20px",
  },
  txt: {
    color: "white",
    textAlign: "center",
  },
  btn: {
    marginTop: "20px",
  },
};

export default Home;
