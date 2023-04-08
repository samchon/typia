import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { TagInfinite } from "../../../structures/TagInfinite";

export const test_createAssertPrune_TagInfinite = _test_assertPrune(
    "TagInfinite",
    TagInfinite.generate,
    (input: any): TagInfinite => {
        const assert = (input: any): TagInfinite => {
            const $guard = (typia.createAssertPrune as any).guard;
            const __is = (input: any): input is TagInfinite => {
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
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
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
                            (0 <= input.ranged ||
                                $guard(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "number (@minimum 0)",
                                    value: input.ranged,
                                })) &&
                            (100 >= input.ranged ||
                                $guard(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "number (@maximum 100)",
                                    value: input.ranged,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".ranged",
                                expected: "number",
                                value: input.ranged,
                            })) &&
                        (("number" === typeof input.minimum &&
                            Number.isFinite(input.minimum) &&
                            (0 <= input.minimum ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "number (@minimum 0)",
                                    value: input.minimum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number",
                                value: input.minimum,
                            })) &&
                        (("number" === typeof input.maximum &&
                            Number.isFinite(input.maximum) &&
                            (100 >= input.maximum ||
                                $guard(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "number (@maximum 100)",
                                    value: input.maximum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "number",
                                value: input.maximum,
                            })) &&
                        (("number" === typeof input.multipleOf &&
                            (0 === input.multipleOf % 3 ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number (@multipleOf 3)",
                                    value: input.multipleOf,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number",
                                value: input.multipleOf,
                            })) &&
                        (("number" === typeof input.typed &&
                            Number.isFinite(input.typed) &&
                            (parseInt(input.typed) === input.typed ||
                                $guard(_exceptionable, {
                                    path: _path + ".typed",
                                    expected: "number (@type int)",
                                    value: input.typed,
                                }))) ||
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
        };
        const prune = (input: TagInfinite): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "value" === key ||
                        "ranged" === key ||
                        "minimum" === key ||
                        "maximum" === key ||
                        "multipleOf" === key ||
                        "typed" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        assert(input);
        prune(input);
        return input;
    },
    TagInfinite.SPOILERS,
);
