import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchUserVacation } from "../../store/actions/userActions";
import User from "../User/User";
import { Grid } from "@material-ui/core";

const Users = () => {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();

  const changeUserVacation = id => {
    dispatch(switchUserVacation(id));
  };

  return (
    <Grid container justify="center" style={{ overflowX: "hidden" }}>
      {Object.keys(users).map(user => (
        <Grid item sm={12}>
          <User
            id={users[user].id}
            name={users[user].name}
            position={users[user].position}
            onVacation={users[user].onVacation}
            changeUserVacation={changeUserVacation}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default Users;
