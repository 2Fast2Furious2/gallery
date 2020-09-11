import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 100,
  duration: "1s",
};

export default function () {
  let res = http.get("http://13.57.28.149:3001/properties/321/");
  // check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}

// export let options = {
//   stages: [
//     { duration: "s", target: 1 },
//     { duration: "10s", target: 10 },
//     { duration: "10s", target: 100 },
//     { duration: "10s", target: 1000 },
//   ],
// };

// export default function () {
//   http.get("http://localhost:3000/properties/3/");
//   sleep(1);
// }