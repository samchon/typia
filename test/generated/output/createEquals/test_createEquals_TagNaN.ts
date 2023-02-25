import typia from "../../../src";
import { TagNaN } from "../../structures/TagNaN";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_TagNaN = _test_equals("TagNaN", TagNaN.generate, (input: any, _exceptionable: boolean): input is TagNaN => {
    const $io0 = (input: any, _exceptionable: boolean) => "number" === typeof input.value && ("number" === typeof input.ranged && 0 <= input.ranged && 100 >= input.ranged) && ("number" === typeof input.minimum && 0 <= input.minimum) && ("number" === typeof input.maximum && 100 >= input.maximum) && ("number" === typeof input.multipleOf && 0 === input.multipleOf % 3) && ("number" === typeof input.typed && parseInt(input.typed) === input.typed) && (6 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value", "ranged", "minimum", "maximum", "multipleOf", "typed"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
});
