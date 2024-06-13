import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "../store/atoms/user.js";
import { userEmailState } from "../store/selectors/userEmail";

function Appbar({}) {
  const navigate = useNavigate();
  const userLoading = useRecoilValue(isUserLoading);
  const userEmail = useRecoilValue(userEmailState);
  const setUser = useSetRecoilState(userState);

  if (userLoading) {
    return <></>;
  }

  if (userEmail) {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 3,
            zIndex: 1,
          }}
        >
          <div
            style={{ cursor: "pointer", marginLeft: "15px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            {/* <Typography variant={"h6"}>Coursera</Typography> */}
            <img
              src="https://1000logos.net/wp-content/uploads/2022/06/Coursera-Logo-2048x1152.png"
              href="coursera logo"
              style={{ width: "130px" }}
            />
          </div>

          <div
            style={{ display: "flex", marginRight: "10px", marginTop: "10px" }}
          >
            <div style={{ marginRight: 10, display: "flex" }}>
              <div style={{ marginRight: 10 }}>
                <Button
                  onClick={() => {
                    navigate("/addcourse");
                  }}
                >
                  Add course
                </Button>
              </div>

              <div style={{ marginRight: 10 }}>
                <Button
                  onClick={() => {
                    navigate("/courses");
                  }}
                >
                  Courses
                </Button>
              </div>

              <div>
                <Button
                  variant={"contained"}
                  onClick={() => {
                    localStorage.setItem("token", null);
                    setUser({
                      isLoading: false,
                      userEmail: null,
                    });
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "1px",
            backgroundColor: "lightgrey",
          }}
        ></div>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 3,
          zIndex: 1,
        }}
      >
        <div
          style={{ cursor: "pointer", marginLeft: "15px" }}
          onClick={() => {
            navigate("/");
          }}
        >
          {/* <Typography variant={"h6"}>Coursera</Typography> */}
          <img
            src="https://1000logos.net/wp-content/uploads/2022/06/Coursera-Logo-2048x1152.png"
            href="coursera logo"
            style={{ width: "130px" }}
          />
        </div>

        <div
          style={{ display: "flex", marginRight: "10px", marginTop: "10px" }}
        >
          <div style={{ marginRight: 10 }}>
            <Button
              variant={"contained"}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </Button>
          </div>
          <div>
            <Button
              variant={"contained"}
              onClick={() => {
                navigate("/signin");
              }}
            >
              Signin
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "1px",
          backgroundColor: "lightgrey",
        }}
      ></div>
    </div>
  );
}

export default Appbar;
