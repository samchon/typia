import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_createValidateEquals_ObjectLiteralType = _test_validateEquals(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input: any): typia.IValidation<ObjectLiteralType> => {
        const __is: any = (
            input: any,
            _exceptionable: boolean = true,
        ): input is ObjectLiteralType => {
            const $io0: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age) &&
                (3 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["id", "name", "age"].some(
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
            ): input is ObjectLiteralType => {
                const $vo0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.id ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        ("number" === typeof input.age &&
                            Number.isFinite(input.age)) ||
                            $report(_exceptionable, {
                                path: _path + ".age",
                                expected: "number",
                                value: input.age,
                            }),
                        3 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        ["id", "name", "age"].some(
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
                            expected: "__object",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "__object",
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
