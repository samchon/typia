import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_assertStringify_ObjectGenericAlias = _test_assertStringify(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) =>
        ((input: any): string => {
            const assert: any = (
                input: any,
            ): ObjectGenericAlias.ISomething<string> => {
                const __is: any = (
                    input: any,
                ): input is ObjectGenericAlias.ISomething<string> => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof input.value
                    );
                };
                const $guard: any = (typia.assertStringify as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectGenericAlias.ISomething<string> => {
                        const $ao0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            "string" === typeof input.value ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "string",
                                value: input.value,
                            });
                        return (
                            (("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectGenericAlias.Alias",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify: any = (
                input: ObjectGenericAlias.ISomething<string>,
            ): string => {
                const $string: any = (typia.assertStringify as any).string;
                return `{"value":${$string(input.value)}}`;
            };
            return stringify(assert(input));
        })(input),
    ObjectGenericAlias.SPOILERS,
);
