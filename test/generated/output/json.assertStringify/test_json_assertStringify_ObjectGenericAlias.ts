import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_assertStringify_ObjectGenericAlias =
    _test_json_assertStringify<ObjectGenericAlias>(ObjectGenericAlias)(
        (input) =>
            ((input: any): string => {
                const assert = (
                    input: any,
                ): ObjectGenericAlias.ISomething<string> => {
                    const __is = (
                        input: any,
                    ): input is ObjectGenericAlias.ISomething<string> => {
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            "string" === typeof (input as any).value
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectGenericAlias.ISomething<string> => {
                            const $guard = (typia.json.assertStringify as any)
                                .guard;
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
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "ObjectGenericAlias.Alias",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectGenericAlias.Alias",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const stringify = (
                    input: ObjectGenericAlias.ISomething<string>,
                ): string => {
                    const $string = (typia.json.assertStringify as any).string;
                    return `{"value":${$string((input as any).value)}}`;
                };
                return stringify(assert(input));
            })(input),
    );
