import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_createValidateEquals_DynamicConstant = _test_validateEquals(
    "DynamicConstant",
    DynamicConstant.generate,
    (input: any): typia.IValidation<DynamicConstant> => {
        const __is: any = (
            input: any,
            _exceptionable: boolean = true,
        ): input is DynamicConstant => {
            const $io0: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "number" === typeof input.a &&
                Number.isFinite(input.a) &&
                "number" === typeof input.b &&
                Number.isFinite(input.b) &&
                "number" === typeof input.c &&
                Number.isFinite(input.c) &&
                "number" === typeof input.d &&
                Number.isFinite(input.d) &&
                (4 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["a", "b", "c", "d"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value: any = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        };
        const errors: any = [] as any[];
        const $report: any = (typia.createValidateEquals as any).report(errors);
        const $join: any = (typia.createValidateEquals as any).join;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is DynamicConstant => {
                const $vo0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.a &&
                            Number.isFinite(input.a)) ||
                            $report(_exceptionable, {
                                path: _path + ".a",
                                expected: "number",
                                value: input.a,
                            }),
                        ("number" === typeof input.b &&
                            Number.isFinite(input.b)) ||
                            $report(_exceptionable, {
                                path: _path + ".b",
                                expected: "number",
                                value: input.b,
                            }),
                        ("number" === typeof input.c &&
                            Number.isFinite(input.c)) ||
                            $report(_exceptionable, {
                                path: _path + ".c",
                                expected: "number",
                                value: input.c,
                            }),
                        ("number" === typeof input.d &&
                            Number.isFinite(input.d)) ||
                            $report(_exceptionable, {
                                path: _path + ".d",
                                expected: "number",
                                value: input.d,
                            }),
                        4 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        ["a", "b", "c", "d"].some(
                                            (prop: any) => key === prop,
                                        )
                                    )
                                        return true;
                                    const value: any = input[key];
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
                            expected: "DynamicConstant",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "DynamicConstant",
                        value: input,
                    })
                );
            })(input, "$input", true);
        const success: any = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
);
