import axios from "axios";

export default axios.create({
  baseURL: "http://prod-land-api-service.ap-northeast-2.elasticbeanstalk.com/land" + "http://localhost:8080/land",
  headers: {
    "Content-type": "application/json"
  }
});
// sftp://203.245.44.21