import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_is } from "../internal/_test_is";
export const test_createIs_ObjectSimple = _test_is("ObjectSimple", ObjectSimple.generate, (input: any): input is IBox3D => {
    const $io0 = (input: any) => "object" === typeof input.scale && null !== input.scale && ("number" === typeof input.scale.x && "number" === typeof input.scale.y && "number" === typeof input.scale.z) && ("object" === typeof input.position && null !== input.position && ("number" === typeof input.position.x && "number" === typeof input.position.y && "number" === typeof input.position.z)) && ("object" === typeof input.rotate && null !== input.rotate && ("number" === typeof input.rotate.x && "number" === typeof input.rotate.y && "number" === typeof input.rotate.z)) && ("object" === typeof input.pivot && null !== input.pivot && ("number" === typeof input.pivot.x && "number" === typeof input.pivot.y && "number" === typeof input.pivot.z));
    return "object" === typeof input && null !== input && $io0(input);
}, ObjectSimple.SPOILERS);
