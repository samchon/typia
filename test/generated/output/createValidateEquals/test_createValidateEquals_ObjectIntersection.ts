import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
export const test_createValidateEquals_ObjectIntersection = _test_validateEquals("ObjectIntersection", ObjectIntersection.generate, (input: any): typia.IValidation<ObjectIntersection> => {
    const __is = (input: any, _exceptionable: boolean = true): input is ObjectIntersection => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.email && "string" === typeof input.name && "boolean" === typeof input.vulnerable && (3 === Object.keys(input).length || Object.keys(input).every(key => {
            if (["email", "name", "vulnerable"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        return "object" === typeof input && null !== input && $io0(input, true);
    };
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    const $join = (typia.createValidateEquals as any).join;
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectIntersection => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.email || $report(_exceptionable, {
                    path: _path + ".email",
                    expected: "string",
                    value: input.email
                }), "string" === typeof input.name || $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name
                }), "boolean" === typeof input.vulnerable || $report(_exceptionable, {
                    path: _path + ".vulnerable",
                    expected: "boolean",
                    value: input.vulnerable
                }), 3 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                    if (["email", "name", "vulnerable"].some(prop => key === prop))
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
            return ("object" === typeof input && null !== input || $report(true, {
                path: _path + "",
                expected: "ObjectIntersection",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "ObjectIntersection",
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
