import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SweetPagination from "sweetpagination";
import Details from "./Components/Details";
import Header from "./Components/Header";
import "./App.css";
function App() {
  const [users, setUsers] = useState([]);
  const getUserdetail = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  };

  useEffect(() => {
    getUserdetail();
  }, []);
  const [currentPageData, setCurrentPageData] = useState(users);
  return (
    <div className="dash">
        <Header/>
        {currentPageData.map((user) => (
          <Details
          key={user.id}
          name={user.username}
          contact={user.name}
          city={user.address.city}
          street={user.address.street}
          company={user.company.name}
          email={user.email}
          phone={user.phone}
          address={`${user.address.street}, ${user.address.suite}, ${user.address.city},${user.address.zipcode}`}
          website={user.website}
          catchPhrase={user.company.catchPhrase}
          bs={user.company.bs}
        />
        ))}

      <div className="paginate">
        <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={3}
          getData={users}
          navigation={true}
        />
      </div>
    </div>
  );
}
export default App;
