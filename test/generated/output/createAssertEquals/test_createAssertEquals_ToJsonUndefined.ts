import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ToJsonUndefined } from "../../../structures/ToJsonUndefined";

export const test_assertEquals_ToJsonUndefined =
    _test_assertEquals<ToJsonUndefined>(ToJsonUndefined)(
        (input: any): ToJsonUndefined => {
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is ToJsonUndefined => {
                const $io0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    0 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    });
                return (
                    "object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input) &&
                    $io0(input, true)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ToJsonUndefined => {
                    const $guard = (typia.createAssertEquals as any).guard;
                    const $join = (typia.createAssertEquals as any).join;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        0 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        });
                    return (
                        ((("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ToJsonUndefined",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ToJsonUndefined",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        },
    );
