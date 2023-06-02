import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { FunctionalProperty } from "../../../structures/FunctionalProperty";

export const test_createAssert_FunctionalProperty = _test_assert(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input: any): FunctionalProperty => {
        const __is: any = (input: any): input is FunctionalProperty => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.name &&
                "function" === typeof input.closure;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const $guard: any = (typia.createAssert as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is FunctionalProperty => {
                const $ao0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    ("function" === typeof input.closure ||
                        $guard(_exceptionable, {
                            path: _path + ".closure",
                            expected: "unknown",
                            value: input.closure,
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "FunctionalProperty",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
        return input;
    },
    FunctionalProperty.SPOILERS,
);
