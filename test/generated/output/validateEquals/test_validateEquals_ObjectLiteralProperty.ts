import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_validateEquals_ObjectLiteralProperty = _test_validateEquals(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
    ((input: any): typia.IValidation<ObjectLiteralProperty> => {
        const errors = [] as any[];
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is ObjectLiteralProperty => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" ===
                    typeof input["something-interesting-do-you-want?"] &&
                "string" === typeof input["or-something-crazy-do-you-want?"] &&
                (2 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "something-interesting-do-you-want?",
                                "or-something-crazy-do-you-want?",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        };
        if (false === __is(input)) {
            const $report = (typia.validateEquals as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectLiteralProperty => {
                const $join = (typia.validateEquals as any).join;
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" ===
                            typeof input[
                                "something-interesting-do-you-want?"
                            ] ||
                            $report(_exceptionable, {
                                path:
                                    _path +
                                    '["something-interesting-do-you-want?"]',
                                expected: "string",
                                value: input[
                                    "something-interesting-do-you-want?"
                                ],
                            }),
                        "string" ===
                            typeof input["or-something-crazy-do-you-want?"] ||
                            $report(_exceptionable, {
                                path:
                                    _path +
                                    '["or-something-crazy-do-you-want?"]',
                                expected: "string",
                                value: input["or-something-crazy-do-you-want?"],
                            }),
                        2 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        [
                                            "something-interesting-do-you-want?",
                                            "or-something-crazy-do-you-want?",
                                        ].some((prop: any) => key === prop)
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
                            expected: "ObjectLiteralProperty.ISomething",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "ObjectLiteralProperty.ISomething",
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
    })(input),
);
