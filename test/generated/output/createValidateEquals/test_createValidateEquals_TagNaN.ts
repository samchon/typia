import typia from "../../../../src";
import { TagNaN } from "../../../structures/TagNaN";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TagNaN = _test_validateEquals(
    "TagNaN",
    TagNaN.generate,
    (input: any): typia.IValidation<TagNaN> => {
        const errors = [] as any[];
        const $report = (typia.createValidateEquals as any).report(errors);
        const $join = (typia.createValidateEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagNaN => {
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
                        0 <= input.ranged &&
                        100 >= input.ranged) ||
                        $report(_exceptionable, {
                            path: _path + ".ranged",
                            expected: "number",
                            value: input.ranged,
                        }),
                    ("number" === typeof input.minimum &&
                        Number.isFinite(input.minimum) &&
                        0 <= input.minimum) ||
                        $report(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "number",
                            value: input.minimum,
                        }),
                    ("number" === typeof input.maximum &&
                        Number.isFinite(input.maximum) &&
                        100 >= input.maximum) ||
                        $report(_exceptionable, {
                            path: _path + ".maximum",
                            expected: "number",
                            value: input.maximum,
                        }),
                    ("number" === typeof input.multipleOf &&
                        0 === input.multipleOf % 3) ||
                        $report(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "number",
                            value: input.multipleOf,
                        }),
                    ("number" === typeof input.typed &&
                        Number.isFinite(input.typed) &&
                        parseInt(input.typed) === input.typed) ||
                        $report(_exceptionable, {
                            path: _path + ".typed",
                            expected: "number",
                            value: input.typed,
                        }),
                    6 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (
                                    [
                                        "value",
                                        "ranged",
                                        "minimum",
                                        "maximum",
                                        "multipleOf",
                                        "typed",
                                    ].some((prop) => key === prop)
                                )
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $report(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            })
                            .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
            return (
                ((("object" === typeof input && null !== input) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<TagNaN>",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Resolve<TagNaN>",
                    value: input,
                })
            );
        })(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
);
