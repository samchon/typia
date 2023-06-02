import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_assertClone_ToJsonNull = _test_assertClone(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) =>
        ((input: any): typia.Primitive<ToJsonNull> => {
            const assert: any = (input: any): ToJsonNull => {
                const __is: any = (input: any): input is ToJsonNull => {
                    const $io0: any = (input: any): boolean =>
                        "function" === typeof input.toJSON;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const $guard: any = (typia.assertClone as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ToJsonNull => {
                        const $ao0: any = (
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
                            (("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ToJsonNull",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone: any = (
                input: ToJsonNull,
            ): typia.Primitive<ToJsonNull> => {
                return "object" === typeof input &&
                    null !== input &&
                    "function" === typeof input.toJSON
                    ? (input.toJSON() as any)
                    : (input as any);
            };
            assert(input);
            const output: any = clone(input);
            return output;
        })(input),
);
