import typia from "../../../src";
import { TagNaN } from "../../structures/TagNaN";
import { _test_is } from "../internal/_test_is";
export const test_createIs_TagNaN = _test_is("TagNaN", TagNaN.generate, (input: any): input is TagNaN => {
    const $io0 = (input: any) => "number" === typeof input.value && ("number" === typeof input.ranged && 0 <= input.ranged && 100 >= input.ranged) && ("number" === typeof input.minimum && 0 <= input.minimum) && ("number" === typeof input.maximum && 100 >= input.maximum) && ("number" === typeof input.multipleOf && 0 === input.multipleOf % 3) && ("number" === typeof input.typed && parseInt(input.typed) === input.typed);
    return "object" === typeof input && null !== input && $io0(input);
}, TagNaN.SPOILERS);
