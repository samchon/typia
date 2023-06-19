import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { TagInfinite } from "../../../structures/TagInfinite";

export const test_createValidate_TagInfinite = _test_validate(
    "TagInfinite",
    TagInfinite.generate,
    (input: any): typia.IValidation<TagInfinite> => {
        const errors = [] as any[];
        const __is = (input: any): input is TagInfinite => {
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
                parseInt((input as any).typed) === (input as any).typed
            );
        };
        if (false === __is(input)) {
            const $report = (typia.createValidate as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagInfinite => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }),
                        ("number" === typeof input.ranged &&
                            (0 <= input.ranged ||
                                $report(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "number (@minimum 0)",
                                    value: input.ranged,
                                })) &&
                            (100 >= input.ranged ||
                                $report(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "number (@maximum 100)",
                                    value: input.ranged,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".ranged",
                                expected: "number",
                                value: input.ranged,
                            }),
                        ("number" === typeof input.minimum &&
                            Number.isFinite(input.minimum) &&
                            (0 <= input.minimum ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "number (@minimum 0)",
                                    value: input.minimum,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number",
                                value: input.minimum,
                            }),
                        ("number" === typeof input.maximum &&
                            Number.isFinite(input.maximum) &&
                            (100 >= input.maximum ||
                                $report(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "number (@maximum 100)",
                                    value: input.maximum,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "number",
                                value: input.maximum,
                            }),
                        ("number" === typeof input.multipleOf &&
                            (0 === input.multipleOf % 3 ||
                                $report(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number (@multipleOf 3)",
                                    value: input.multipleOf,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number",
                                value: input.multipleOf,
                            }),
                        ("number" === typeof input.typed &&
                            Number.isFinite(input.typed) &&
                            (parseInt(input.typed) === input.typed ||
                                $report(_exceptionable, {
                                    path: _path + ".typed",
                                    expected: "number (@type int)",
                                    value: input.typed,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".typed",
                                expected: "number",
                                value: input.typed,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagInfinite",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TagInfinite",
                        value: input,
                    })
                );
            })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
    TagInfinite.SPOILERS,
);
