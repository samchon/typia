import typia from "typia";

interface Circle {
  type: "circle";
  radius: number;
}

const input: unknown = {
  type: "circle",
  radius: 5,
};

// only the discriminator and the top-level shape are checked
if (typia.shallow<Circle, 1>(input)) {
  console.log(input.radius); // 5
}
