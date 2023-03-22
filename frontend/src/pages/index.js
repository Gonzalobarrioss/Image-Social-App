import React from "react";
import Layout from "../layouts/index.js";
//import {  } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <Layout>
      <Card>
        <div class="card-header bg-dark">
          <h3 class="card-title text-white">
            <FontAwesomeIcon icon={faImage} /> Upload a Image
          </h3>
        </div>
        <div class="card-body"></div>
      </Card>
    </Layout>
  );
};

export default Home;
