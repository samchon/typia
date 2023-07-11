import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_createAssertClone_ToJsonNull = _test_assertClone(
    "ToJsonNull",
    ToJsonNull.generate,
    (input: any): typia.Primitive<ToJsonNull> => {
        const assert = (input: any): ToJsonNull => {
            const __is = (input: any): input is ToJsonNull => {
                const $io0 = (input: any): boolean =>
                    "function" === typeof input.toJSON;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ToJsonNull => {
                    const $guard = (typia.createAssertClone as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "function" === typeof input.toJSON ||
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
        const clone = (input: ToJsonNull): typia.Primitive<ToJsonNull> => {
            return "object" === typeof input &&
                null !== input &&
                "function" === typeof input.toJSON
                ? (input.toJSON() as any)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
);
