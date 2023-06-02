import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_assertClone_ObjectGenericAlias = _test_assertClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<ObjectGenericAlias.ISomething<string>> => {
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
                const $guard: any = (typia.assertClone as any).guard;
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
            const clone: any = (
                input: ObjectGenericAlias.ISomething<string>,
            ): typia.Primitive<ObjectGenericAlias.ISomething<string>> => {
                const $co0: any = (input: any): any => ({
                    value: input.value as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output: any = clone(input);
            return output;
        })(input),
    ObjectGenericAlias.SPOILERS,
);
