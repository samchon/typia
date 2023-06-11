import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagNaN } from "../../../structures/TagNaN";

export const test_createIs_TagNaN = _test_is(
    "TagNaN",
    TagNaN.generate,
    (input: any): input is TagNaN => {
        const $io0 = (input: any): boolean =>
            "number" === typeof input.value &&
            Number.isFinite(input.value) &&
            "number" === typeof input.ranged &&
            0 <= input.ranged &&
            100 >= input.ranged &&
            "number" === typeof input.minimum &&
            Number.isFinite(input.minimum) &&
            0 <= input.minimum &&
            "number" === typeof input.maximum &&
            Number.isFinite(input.maximum) &&
            100 >= input.maximum &&
            "number" === typeof input.multipleOf &&
            0 === input.multipleOf % 3 &&
            "number" === typeof input.typed &&
            Number.isFinite(input.typed) &&
            parseInt(input.typed) === input.typed;
        return "object" === typeof input && null !== input && $io0(input);
    },
    TagNaN.SPOILERS,
);
