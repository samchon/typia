import typia from "../../../../src";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_json_assertParse_ToJsonNull = _test_json_assertParse(
    "ToJsonNull",
)<ToJsonNull>(ToJsonNull)((input: string): typia.Primitive<ToJsonNull> => {
    const assert = (input: any): ToJsonNull => {
        const __is = (input: any): input is ToJsonNull => {
            const $io0 = (input: any): boolean => true;
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ToJsonNull => {
                const $guard = (typia.json.createAssertParse as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    true ||
                    $guard(_exceptionable, {
                        path: _path + ".toJSON",
                        expected: "unknown",
                        value: input.toJSON,
                    });
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ToJsonNull",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ToJsonNull",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    };
    input = JSON.parse(input);
    return assert(input) as any;
});
