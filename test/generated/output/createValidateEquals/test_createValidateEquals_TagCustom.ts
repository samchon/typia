import typia from "../../../../src";
import { TagCustom } from "../../../structures/TagCustom";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
export const test_createValidateEquals_TagCustom = _test_validateEquals("TagCustom", TagCustom.generate, (input: any): typia.IValidation<TagCustom> => {
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    const __is = (input: any, _exceptionable: boolean = true): input is TagCustom => {
        const $is_uuid = (typia.createValidateEquals as any).is_uuid;
        const $is_custom = (typia.createValidateEquals as any).is_custom;
        const $io0 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.id && $is_uuid(input.id) && ("string" === typeof input.dollar && $is_custom("dollar", "string", "", input.dollar)) && ("string" === typeof input.postfix && $is_custom("postfix", "string", "abcd", input.postfix)) && ("number" === typeof input.log && Number.isFinite(input.log) && $is_custom("powerOf", "number", "10", input.log)) && (4 === Object.keys(input).length || Object.keys(input).every((key: any) => {
            if (["id", "dollar", "postfix", "log"].some((prop: any) => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is TagCustom => {
            const $is_uuid = (typia.createValidateEquals as any).is_uuid;
            const $is_custom = (typia.createValidateEquals as any).is_custom;
            const $join = (typia.createValidateEquals as any).join;
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id && ($is_uuid(input.id) || $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string (@format uuid)",
                    value: input.id
                })) || $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id
                }), "string" === typeof input.dollar && ($is_custom("dollar", "string", "", input.dollar) || $report(_exceptionable, {
                    path: _path + ".dollar",
                    expected: "string (@dollar)",
                    value: input.dollar
                })) || $report(_exceptionable, {
                    path: _path + ".dollar",
                    expected: "string",
                    value: input.dollar
                }), "string" === typeof input.postfix && ($is_custom("postfix", "string", "abcd", input.postfix) || $report(_exceptionable, {
                    path: _path + ".postfix",
                    expected: "string (@postfix abcd)",
                    value: input.postfix
                })) || $report(_exceptionable, {
                    path: _path + ".postfix",
                    expected: "string",
                    value: input.postfix
                }), "number" === typeof input.log && Number.isFinite(input.log) && ($is_custom("powerOf", "number", "10", input.log) || $report(_exceptionable, {
                    path: _path + ".log",
                    expected: "number (@powerOf 10)",
                    value: input.log
                })) || $report(_exceptionable, {
                    path: _path + ".log",
                    expected: "number",
                    value: input.log
                }), 4 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map((key: any) => {
                    if (["id", "dollar", "postfix", "log"].some((prop: any) => key === prop))
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
                expected: "TagCustom",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "TagCustom",
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
