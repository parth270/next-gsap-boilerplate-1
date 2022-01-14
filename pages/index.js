import React from "react";
import classes from "../styles/Home.module.css";

export default function Home() {
  
  return (
    // This is the next-gsap-boilerplate-1
    <>
      <div
        className={classes.container}
        style={{ color: "#fff", backgroundColor: "rgb(53, 51, 51)" }}
      >
        {/* This is the container for all the H tags */}
        <div className={classes.row}>
          <div className={classes["text-container"]}>
            <h1>Lorem ipsum dolor sit am.</h1>
            <h2>Lorem ipsum dolor sit am.</h2>
            <h3>Lorem ipsum dolor sit am.</h3>
            <h4>Lorem ipsum dolor sit am.</h4>
          </div>
          {/* This the image */}
          <img src="001.jpg" className={classes.image} />
        </div>
      </div>
      {/* this is the container for the P tag!! */}
      <div
        className={classes.container}
        style={{ color: "#000", backgroundColor: "#fff" }}
      >
        <div className={classes["row-para"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quas
            atque adipisci impedit velit reprehenderit dolorem saepe distinctio
            voluptatibus nostrum magni consequatur numquam aliquid, at amet
            cupiditate voluptatum debitis ratione soluta neque facere nihil
            autem dolores! Aspernatur sequi odit perferendis quia optio quod
            eligendi autem nisi culpa asperiores natus reprehenderit, itaque
            debitis quis repellat eum, neque ipsa quos, quisquam consequatur
            maxime! Doloribus veniam, aperiam nemo architecto dicta dolore, quae
            assumenda, placeat omnis quibusdam tenetur optio accusamus dolores
            pariatur. At temporibus consequuntur illo, quod ex quae suscipit?
            Minus, quasi amet laborum nostrum deserunt cupiditate! Corporis vero
            explicabo, aut incidunt sequi soluta.
          </p>
        </div>
      </div>
    </>
  );
}