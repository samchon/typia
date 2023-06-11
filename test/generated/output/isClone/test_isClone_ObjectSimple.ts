import typia from "../../../../src";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_isClone } from "../../../internal/_test_isClone";
export const test_isClone_ObjectSimple = _test_isClone("ObjectSimple", ObjectSimple.generate, (input) => ((input: any): typia.Primitive<ObjectSimple.IBox3D> | null => { const is = (input: any): input is ObjectSimple.IBox3D => {
    const $io0 = (input: any): boolean => "object" === typeof input.scale && null !== input.scale && ("number" === typeof (input.scale as any).x && Number.isFinite((input.scale as any).x) && ("number" === typeof (input.scale as any).y && Number.isFinite((input.scale as any).y)) && ("number" === typeof (input.scale as any).z && Number.isFinite((input.scale as any).z))) && ("object" === typeof input.position && null !== input.position && ("number" === typeof (input.position as any).x && Number.isFinite((input.position as any).x) && ("number" === typeof (input.position as any).y && Number.isFinite((input.position as any).y)) && ("number" === typeof (input.position as any).z && Number.isFinite((input.position as any).z)))) && ("object" === typeof input.rotate && null !== input.rotate && ("number" === typeof (input.rotate as any).x && Number.isFinite((input.rotate as any).x) && ("number" === typeof (input.rotate as any).y && Number.isFinite((input.rotate as any).y)) && ("number" === typeof (input.rotate as any).z && Number.isFinite((input.rotate as any).z)))) && ("object" === typeof input.pivot && null !== input.pivot && ("number" === typeof (input.pivot as any).x && Number.isFinite((input.pivot as any).x) && ("number" === typeof (input.pivot as any).y && Number.isFinite((input.pivot as any).y)) && ("number" === typeof (input.pivot as any).z && Number.isFinite((input.pivot as any).z))));
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: ObjectSimple.IBox3D): typia.Primitive<ObjectSimple.IBox3D> => {
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
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ObjectSimple.SPOILERS);
