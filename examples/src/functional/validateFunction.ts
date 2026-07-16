import typia from "typia";

interface Receiver {
  offset: number;
}

function add(this: Receiver, x: number, y: number): number {
  return this.offset + x + y;
}

const func = typia.functional.validateFunction(add);
func.call({ offset: 10 }, 3, 4);
func.call({ offset: 20 }, 4, 5);
