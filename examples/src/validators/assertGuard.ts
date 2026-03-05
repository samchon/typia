import typia from "typia";

interface IPoint {
  x: number;
  y: number;
}
const input: unknown = { x: 1, y: 2 };

// PERFORM THE ASSERTION GUARD
typia.assertGuard<IPoint>(input);

// FROM NOW ON, "input" IS THE "IPoint" TYPE
input.x; // OK
input.y; // OK
