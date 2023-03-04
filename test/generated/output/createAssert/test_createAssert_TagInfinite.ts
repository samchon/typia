import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { TagInfinite } from "../../../structures/TagInfinite";

export const test_createAssert_TagInfinite = _test_assert(
    "TagInfinite",
    TagInfinite.generate,
    (input: any): TagInfinite => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagInfinite => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.value &&
                    Number.isFinite(input.value)) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "number",
                        value: input.value,
                    })) &&
                (("number" === typeof input.ranged &&
                    0 <= input.ranged &&
                    100 >= input.ranged) ||
                    $guard(_exceptionable, {
                        path: _path + ".ranged",
                        expected: "number",
                        value: input.ranged,
                    })) &&
                (("number" === typeof input.minimum &&
                    Number.isFinite(input.minimum) &&
                    0 <= input.minimum) ||
                    $guard(_exceptionable, {
                        path: _path + ".minimum",
                        expected: "number",
                        value: input.minimum,
                    })) &&
                (("number" === typeof input.maximum &&
                    Number.isFinite(input.maximum) &&
                    100 >= input.maximum) ||
                    $guard(_exceptionable, {
                        path: _path + ".maximum",
                        expected: "number",
                        value: input.maximum,
                    })) &&
                (("number" === typeof input.multipleOf &&
                    0 === input.multipleOf % 3) ||
                    $guard(_exceptionable, {
                        path: _path + ".multipleOf",
                        expected: "number",
                        value: input.multipleOf,
                    })) &&
                (("number" === typeof input.typed &&
                    Number.isFinite(input.typed) &&
                    parseInt(input.typed) === input.typed) ||
                    $guard(_exceptionable, {
                        path: _path + ".typed",
                        expected: "number",
                        value: input.typed,
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<TagInfinite>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
    TagInfinite.SPOILERS,
);