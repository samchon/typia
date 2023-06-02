import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_assertStringify_ToJsonNull = _test_assertStringify(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) =>
        ((input: any): string => {
            const assert: any = (input: any): ToJsonNull => {
                const __is: any = (input: any): input is ToJsonNull => {
                    const $io0: any = (input: any): boolean => true;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const $guard: any = (typia.assertStringify as any).guard;
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
                            true ||
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
            const stringify: any = (input: ToJsonNull): string => {
                return "null";
            };
            return stringify(assert(input));
        })(input),
);
