import React, { useState } from "react";
import "./page2.css";

type Values = {
  name: string;
  username: string;
  address: string;
};

const Page2 = () => {
  const [values, setValues] = useState<Values>({
    name: "",
    username: "",
    address: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      // style={{ height: "100vh", textAlign: "center", marginTop: "16px" }}
    >
      <div className="profile">User Profile</div>
      <div
        className="form_input "
        // style={{ border: "2px solid black", height: "100vh", width: "600px" }}
      >
        <div className="input_name">
          <input
            type="text"
            placeholder="Name"
            changeHandler-={handleChange}
            className="Form_name"
          />
          <input
            type="text"
            placeholder="Username"
            className="Form_username"
            // changeHandler={handleChange}
          />
        </div>
        <div className="input_address">
          <input
            type="text"
            placeholder="Address"
            className="Form_address"
            // changeHandler={handleChange}
          />
        </div>
        <div className="input_number">
          <input
            type="number"
            placeholder="Number"
            // changeHandler-={handleChange}
            className="Form_number"
          />
          <input
            type="text"
            placeholder="other Details"
            className="Form_details"
            // changeHandler={handleChange}
          />
        </div>
        <button type="submit" className="button_submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Page2;

// import { Link } from "react-router-dom";
// import styles from "./Page2.module.scss";

// function Page2() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Page 1</Link>
//         </li>
//         <li>
//           <Link to="/page_2">Page 2</Link>
//         </li>
//       </ul>
//       <div className={styles.container}>Page 2</div>
//     </nav>
//   );
// }

// export default Page2;
