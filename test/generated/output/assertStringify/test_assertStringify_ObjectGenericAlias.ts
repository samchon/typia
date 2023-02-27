import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_assertStringify_ObjectGenericAlias = _test_assertStringify(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) =>
        ((input: any): string => {
            const assert = (
                input: any,
            ): ObjectGenericAlias.ISomething<string> => {
                const $guard = (typia.assertStringify as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectGenericAlias.ISomething<string> => {
                    const $ao0 = (
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
                                expected: "Resolve<ObjectGenericAlias.Alias>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (
                input: ObjectGenericAlias.ISomething<string>,
            ): string => {
                const $string = (typia.assertStringify as any).string;
                return `{"value":${$string(input.value)}}`;
            };
            return stringify(assert(input));
        })(input),
    ObjectGenericAlias.SPOILERS,
);
