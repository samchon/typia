import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectSimple } from "../../../structures/ObjectSimple";
export const test_clone_ObjectSimple = _test_clone("ObjectSimple", ObjectSimple.generate, (input) => ((input: ObjectSimple.IBox3D): typia.Primitive<ObjectSimple.IBox3D> => {
    const $io1 = (input: any): boolean => "number" === typeof input.x && "number" === typeof input.y && "number" === typeof input.z;
    const $co0 = (input: any): any => ({
        scale: "object" === typeof input.scale && null !== input.scale ? $co1(input.scale) : input.scale as any,
        position: "object" === typeof input.position && null !== input.position ? $co1(input.position) : input.position as any,
        rotate: "object" === typeof input.rotate && null !== input.rotate ? $co1(input.rotate) : input.rotate as any,
        pivot: "object" === typeof input.pivot && null !== input.pivot ? $co1(input.pivot) : input.pivot as any
    });
    const $co1 = (input: any): any => ({
        x: input.x as any,
        y: input.y as any,
        z: input.z as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
})(input));
