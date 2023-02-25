import typia from "../../../../src";
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_DynamicConstant = _test_validateEquals(
    "DynamicConstant",
    DynamicConstant.generate,
    (input: any): typia.IValidation<DynamicConstant> => {
        const errors = [] as any[];
        const $report = (typia.createValidateEquals as any).report(errors);
        const $join = (typia.createValidateEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is DynamicConstant => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ("number" === typeof input.a && Number.isFinite(input.a)) ||
                        $report(_exceptionable, {
                            path: _path + ".a",
                            expected: "number",
                            value: input.a,
                        }),
                    ("number" === typeof input.b && Number.isFinite(input.b)) ||
                        $report(_exceptionable, {
                            path: _path + ".b",
                            expected: "number",
                            value: input.b,
                        }),
                    ("number" === typeof input.c && Number.isFinite(input.c)) ||
                        $report(_exceptionable, {
                            path: _path + ".c",
                            expected: "number",
                            value: input.c,
                        }),
                    ("number" === typeof input.d && Number.isFinite(input.d)) ||
                        $report(_exceptionable, {
                            path: _path + ".d",
                            expected: "number",
                            value: input.d,
                        }),
                    4 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (
                                    ["a", "b", "c", "d"].some(
                                        (prop) => key === prop,
                                    )
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
                        expected: "Resolve<DynamicConstant>",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Resolve<DynamicConstant>",
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
