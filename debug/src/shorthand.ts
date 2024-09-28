import typia from "typia";

const x: number = 3;
const rest = {
  y: 4,
  z: 5,
};
typia.is({ x, ...rest });
