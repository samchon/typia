import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_assertParse_ObjectGenericAlias = _test_assertParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) =>
        ((input: string): typia.Primitive<ObjectGenericAlias> => {
            const assert: any = (input: any): ObjectGenericAlias => {
                const __is: any = (input: any): input is ObjectGenericAlias => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof input.value
                    );
                };
                const $guard: any = (typia.assertParse as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectGenericAlias => {
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
            input = JSON.parse(input);
            return assert(input) as any;
        })(input),
    ObjectGenericAlias.SPOILERS,
);
