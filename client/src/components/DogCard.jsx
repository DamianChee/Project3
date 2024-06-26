import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import useFetch from "../hooks/useFetch";
import UserContext from "../context/user";
import { useInfo } from "../context/info";
import { Stack } from "@mui/material";
import { Container } from "@mui/material";

const DogCard = (props) => {
  const userCtx = useContext(UserContext);

  const {
    isLoggedIn,
    userInfo,
    selectedDog,
    setSelectedDog,
    selectedGoal,
    setSelectedGoal,
    dogByOwner,
    setDogByOwner,
    showSelectDog,
    setShowSelectDog,
    showSelectGoal,
    setShowSelectGoal,
    dogValue,
    setDogValue,
    userById,
    setUserById,
    tasks,
    setTasks,
  } = useInfo();

  const userGoal = userById.goalMode;

  return (
    <>
      {dogByOwner[0] && (
        <div className="dogcard">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            margin="16px"
          >
            {/* Keeping this here but commented out because right now a user can only add one dog */}
            {/* {dogByOwner.map((dog, index) => (
          <div key={index}>
            <p>{dog.breed}</p>
            <p>{dog.personality}</p>
            <p>{dog.coat}</p>
            <p>{dog.size}</p>
            <p>{dog.birthday}</p>
          </div>
        ))} */}
            <div className="dogname">{selectedDog.name}</div>
            {/* <h6>{userById.goalMode}</h6> */}

            {userGoal === "Companionship" && (
              <h5>
                {userById.goalMode}, Affection Level:{dogValue.currentAffection}
              </h5>
            )}
            {userGoal === "Routine & Discipline" && (
              <h5>
                {" "}
                {userById.goalMode}, Hunger Level:{dogValue.currentHunger}
              </h5>
            )}
            {userGoal === "Dog Show" && (
              <h5>
                {" "}
                {userById.goalMode}, Obdience Level:{dogValue.currentObedience}
              </h5>
            )}
            <img
              className="dogimage"
              src={selectedDog.imageUrl}
              alt="selected dog"
            />
            {dogByOwner[0] && (
              <div>
                <br></br>
                <p>
                  I am a {dogByOwner[0].personality} {dogByOwner[0].size}-sized{" "}
                  {dogByOwner[0].breed} that has a {dogByOwner[0].coat} coat!
                </p>
              </div>
            )}
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            margin="8px"
          >
            <Button
              variant="outlined"
              onClick={props.handleActionClick}
              fullWidth
            >
              Feed
            </Button>
            <Button
              variant="outlined"
              onClick={props.handleActionClick}
              fullWidth
            >
              Train
            </Button>
            <Button
              variant="outlined"
              onClick={props.handleActionClick}
              fullWidth
            >
              Play
            </Button>
          </Stack>
        </div>
      )}
    </>
  );
};

export default DogCard;
