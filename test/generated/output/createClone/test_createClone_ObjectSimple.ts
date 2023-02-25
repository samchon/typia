import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ObjectSimple = _test_clone("ObjectSimple", ObjectSimple.generate, (input: IBox3D): typia.Primitive<IBox3D> => {
    const $io1 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && "number" === typeof input.z;
    const $co0 = (input: any) => ({
        scale: "object" === typeof input.scale && null !== input.scale ? $co1(input.scale) : input.scale,
        position: "object" === typeof input.position && null !== input.position ? $co1(input.position) : input.position,
        rotate: "object" === typeof input.rotate && null !== input.rotate ? $co1(input.rotate) : input.rotate,
        pivot: "object" === typeof input.pivot && null !== input.pivot ? $co1(input.pivot) : input.pivot
    });
    const $co1 = (input: any) => ({
        x: input.x,
        y: input.y,
        z: input.z
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
