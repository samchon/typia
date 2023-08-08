import typia from "../../../../src";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_assertParse_ObjectGenericAlias = _test_json_assertParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input: string): typia.Primitive<ObjectGenericAlias> => {
        const assert = (input: any): ObjectGenericAlias => {
            const __is = (input: any): input is ObjectGenericAlias => {
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
                ): input is ObjectGenericAlias => {
                    const $guard = (typia.json.createAssertParse as any).guard;
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
                        ((("object" === typeof input && null !== input) ||
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
        input = JSON.parse(input);
        return assert(input) as any;
    },
    ObjectGenericAlias.SPOILERS,
);
