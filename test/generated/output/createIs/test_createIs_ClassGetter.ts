import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_is } from "../internal/_test_is";
export const test_createIs_ClassGetter = _test_is("ClassGetter", ClassGetter.generate, (input: any): input is Person => {
    return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name && "boolean" === typeof input.dead);
}, ClassGetter.SPOILERS);
