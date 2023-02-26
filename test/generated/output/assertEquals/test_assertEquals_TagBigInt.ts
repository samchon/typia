import typia from "../../../../src";
import { TagBigInt } from "../../../structures/TagBigInt";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TagBigInt = _test_assertEquals(
    "TagBigInt",
    TagBigInt.generate,
    (input) =>
        ((input: any): TagBigInt => {
            const $guard = (typia.assertEquals as any).guard;
            const $join = (typia.assertEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagBigInt => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("bigint" === typeof input.value ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "bigint",
                            value: input.value,
                        })) &&
                    (("bigint" === typeof input.ranged &&
                        0n <= input.ranged &&
                        100n >= input.ranged) ||
                        $guard(_exceptionable, {
                            path: _path + ".ranged",
                            expected: "bigint",
                            value: input.ranged,
                        })) &&
                    (("bigint" === typeof input.minimum &&
                        0n <= input.minimum) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "bigint",
                            value: input.minimum,
                        })) &&
                    (("bigint" === typeof input.maximum &&
                        100n >= input.maximum) ||
                        $guard(_exceptionable, {
                            path: _path + ".maximum",
                            expected: "bigint",
                            value: input.maximum,
                        })) &&
                    (("bigint" === typeof input.multipleOf &&
                        0n === input.multipleOf % 3n) ||
                        $guard(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "bigint",
                            value: input.multipleOf,
                        })) &&
                    (5 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (
                                [
                                    "value",
                                    "ranged",
                                    "minimum",
                                    "maximum",
                                    "multipleOf",
                                ].some((prop) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<TagBigInt>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        })(input),
);
