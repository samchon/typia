import typia from "typia";

interface ICircle {
  type: "circle";
  radius: number;
}

interface IRectangle {
  type: "rectangle";
  width: number;
  height: number;
}

interface IOval {
  type: "oval";
  width: number;
  height: number;
}

type IShape = ICircle[] | IRectangle[] | IOval[];

console.log(typia.createIs<IShape>().toString());
