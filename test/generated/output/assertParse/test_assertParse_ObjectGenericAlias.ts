import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_assertParse_ObjectGenericAlias = _test_assertParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) =>
        ((
            input: string,
        ): typia.Primitive<ObjectGenericAlias.ISomething<string>> => {
            const assert = (input: any): ObjectGenericAlias.Alias => {
                const $guard = (typia.assertParse as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectGenericAlias.Alias => {
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
            input = JSON.parse(input);
            return assert(input);
        })(input),
    ObjectGenericAlias.SPOILERS,
);
