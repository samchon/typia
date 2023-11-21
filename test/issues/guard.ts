import typia from "typia";

interface IPoint {
  x: number;
  y: number;
}

try {
  typia.assertGuardEquals<IPoint>({
    x: 1,
    y: 2,
    z: 3,
  });
} catch (exp) {
  console.log(exp);
}
