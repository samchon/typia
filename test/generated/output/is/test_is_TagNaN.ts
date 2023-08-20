import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagNaN } from "../../../structures/TagNaN";

export const test_is_TagNaN = _test_is<TagNaN>(TagNaN)((input) =>
    ((input: any): input is TagNaN => {
        return (
            "object" === typeof input &&
            null !== input &&
            "number" === typeof (input as any).value &&
            Number.isFinite((input as any).value) &&
            "number" === typeof (input as any).ranged &&
            0 <= (input as any).ranged &&
            100 >= (input as any).ranged &&
            "number" === typeof (input as any).minimum &&
            Number.isFinite((input as any).minimum) &&
            0 <= (input as any).minimum &&
            "number" === typeof (input as any).maximum &&
            Number.isFinite((input as any).maximum) &&
            100 >= (input as any).maximum &&
            "number" === typeof (input as any).multipleOf &&
            0 === (input as any).multipleOf % 3 &&
            "number" === typeof (input as any).typed &&
            Number.isFinite((input as any).typed) &&
            Math.floor((input as any).typed) === (input as any).typed
        );
    })(input),
);
