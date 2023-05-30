import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";
export const test_createValidateEquals_ToJsonAtomicSimple = _test_validateEquals("ToJsonAtomicSimple", ToJsonAtomicSimple.generate, (input: any): typia.IValidation<ToJsonAtomicSimple> => {
    const __is = (input: any, _exceptionable: boolean = true): input is ToJsonAtomicSimple => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean => "function" === typeof input.toJSON && (1 === Object.keys(input).length || Object.keys(input).every(key => {
            if (["toJSON"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean => "function" === typeof input.toJSON && (1 === Object.keys(input).length || Object.keys(input).every(key => {
            if (["toJSON"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        const $io2 = (input: any, _exceptionable: boolean = true): boolean => "function" === typeof input.toJSON && (1 === Object.keys(input).length || Object.keys(input).every(key => {
            if (["toJSON"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0], true)) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1], true)) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2], true)));
    };
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    const $join = (typia.createValidateEquals as any).join;
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ToJsonAtomicSimple => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["function" === typeof input.toJSON || $report(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON
                }), 1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                    if (["toJSON"].some(prop => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value)
                        return true;
                    return $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value
                    });
                }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
            const $vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["function" === typeof input.toJSON || $report(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON
                }), 1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                    if (["toJSON"].some(prop => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value)
                        return true;
                    return $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value
                    });
                }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
            const $vo2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["function" === typeof input.toJSON || $report(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON
                }), 1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                    if (["toJSON"].some(prop => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value)
                        return true;
                    return $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value
                    });
                }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "[ToJsonAtomicSimple.IToJson<boolean>, ToJsonAtomicSimple.IToJson<number>, ToJsonAtomicSimple.IToJson<string>]",
                value: input
            })) && ((input.length === 3 || $report(true, {
                path: _path + "",
                expected: "[ToJsonAtomicSimple.IToJson<boolean>, ToJsonAtomicSimple.IToJson<number>, ToJsonAtomicSimple.IToJson<string>]",
                value: input
            })) && [
                ("object" === typeof input[0] && null !== input[0] || $report(true, {
                    path: _path + "[0]",
                    expected: "ToJsonAtomicSimple.IToJson<boolean>",
                    value: input[0]
                })) && $vo0(input[0], _path + "[0]", true) || $report(true, {
                    path: _path + "[0]",
                    expected: "ToJsonAtomicSimple.IToJson<boolean>",
                    value: input[0]
                }),
                ("object" === typeof input[1] && null !== input[1] || $report(true, {
                    path: _path + "[1]",
                    expected: "ToJsonAtomicSimple.IToJson<number>",
                    value: input[1]
                })) && $vo1(input[1], _path + "[1]", true) || $report(true, {
                    path: _path + "[1]",
                    expected: "ToJsonAtomicSimple.IToJson<number>",
                    value: input[1]
                }),
                ("object" === typeof input[2] && null !== input[2] || $report(true, {
                    path: _path + "[2]",
                    expected: "ToJsonAtomicSimple.IToJson<string>",
                    value: input[2]
                })) && $vo2(input[2], _path + "[2]", true) || $report(true, {
                    path: _path + "[2]",
                    expected: "ToJsonAtomicSimple.IToJson<string>",
                    value: input[2]
                })
            ].every((flag: boolean) => flag)) || $report(true, {
                path: _path + "",
                expected: "[ToJsonAtomicSimple.IToJson<boolean>, ToJsonAtomicSimple.IToJson<number>, ToJsonAtomicSimple.IToJson<string>]",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
});
