import { Link } from "react-router-dom";
import MetaTag from "../../Components/Metatag/MetaTag";
import "./AuthPage.scss";
const AuthPage = () => {
  return (
    <>
      <MetaTag title={"FaceBook - log in or sign up "} />

      <div className="topDiv">
        <div className="itemSection">
          <div className="leftItem">
            <div className="leftItems">
              <div className="logoSection">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                  alt="facebook icon"
                />
              </div>
              <div className="textSection">
                <h2>
                  Facebook helps you connect and share with the people in your
                  life.
                </h2>
              </div>
            </div>
          </div>
          <div className="rightItem">
            <div className="rightItems">
              <div className="fromSection">
                <form action="">
                  <input
                    type="text"
                    placeholder="Email address or phone number"
                  />
                  <input type="text" placeholder="Password" />
                  <button> Log in</button>
                </form>
              </div>

              <div className="forgetPass">
                <Link to="#">Forgotten password?</Link>
              </div>
              <div className="hrTagg">
                <hr />
              </div>

              <div className="createAccountBtn">
                <button>Create new account</button>
              </div>
            </div>

            <div className="createPages">

              <h4>
               
                <Link to="#"> Create a Page </Link> for a celebrity, brand or
                business.
              </h4>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default AuthPage;
