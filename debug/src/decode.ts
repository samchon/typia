import typia from "typia";

interface IBox3D {
  scale: IPoint3D;
  position: IPoint3D;
  rotate: IPoint3D;
  pivot: IPoint3D;
}
interface IPoint3D {
  x: number;
  y: number;
  z: number;
}

() => typia.protobuf.decode<IBox3D>(new Uint8Array());
