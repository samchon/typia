import typia from "../../../../src";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_is } from "../../../internal/_test_is";
export const test_is_ObjectInternal = _test_is("ObjectInternal", ObjectInternal.generate, (input) => ((input: any): input is ObjectInternal => {
    return "object" === typeof input && null !== input && ("string" === typeof (input as any).id && "string" === typeof (input as any).name);
})(input), ObjectInternal.SPOILERS);
