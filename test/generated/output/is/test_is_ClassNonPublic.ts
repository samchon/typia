import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";
export const test_is_ClassNonPublic = _test_is("ClassNonPublic", ClassNonPublic.generate, (input) => ((input: any): input is ClassNonPublic.Accessor => {
    return "object" === typeof input && null !== input && ("string" === typeof input.implicit && "string" === typeof input.shown);
})(input), ClassNonPublic.SPOILERS);
