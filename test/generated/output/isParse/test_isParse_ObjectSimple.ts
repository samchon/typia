import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_ObjectSimple = _test_isParse("ObjectSimple", ObjectSimple.generate, (input) => ((input: any): typia.Primitive<IBox3D> => { const is = (input: any): input is IBox3D => {
    const $io0 = (input: any) => "object" === typeof input.scale && null !== input.scale && ("number" === typeof input.scale.x && "number" === typeof input.scale.y && "number" === typeof input.scale.z) && ("object" === typeof input.position && null !== input.position && ("number" === typeof input.position.x && "number" === typeof input.position.y && "number" === typeof input.position.z)) && ("object" === typeof input.rotate && null !== input.rotate && ("number" === typeof input.rotate.x && "number" === typeof input.rotate.y && "number" === typeof input.rotate.z)) && ("object" === typeof input.pivot && null !== input.pivot && ("number" === typeof input.pivot.x && "number" === typeof input.pivot.y && "number" === typeof input.pivot.z));
    return "object" === typeof input && null !== input && $io0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), ObjectSimple.SPOILERS);
