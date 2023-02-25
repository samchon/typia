import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ObjectSimple = _test_isClone("ObjectSimple", ObjectSimple.generate, (input) => ((input: any): typia.Primitive<IBox3D> | null => { const is = (input: any): input is IBox3D => {
    const $io0 = (input: any) => "object" === typeof input.scale && null !== input.scale && ("number" === typeof input.scale.x && "number" === typeof input.scale.y && "number" === typeof input.scale.z) && ("object" === typeof input.position && null !== input.position && ("number" === typeof input.position.x && "number" === typeof input.position.y && "number" === typeof input.position.z)) && ("object" === typeof input.rotate && null !== input.rotate && ("number" === typeof input.rotate.x && "number" === typeof input.rotate.y && "number" === typeof input.rotate.z)) && ("object" === typeof input.pivot && null !== input.pivot && ("number" === typeof input.pivot.x && "number" === typeof input.pivot.y && "number" === typeof input.pivot.z));
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: IBox3D): typia.Primitive<IBox3D> => {
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
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ObjectSimple.SPOILERS);
