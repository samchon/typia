import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_misc_isClone_ObjectGenericAlias = _test_misc_isClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<ObjectGenericAlias.ISomething<string>> | null => {
            const is = (
                input: any,
            ): input is ObjectGenericAlias.ISomething<string> => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).value
                );
            };
            const clone = (
                input: ObjectGenericAlias.ISomething<string>,
            ): typia.Primitive<ObjectGenericAlias.ISomething<string>> => {
                const $co0 = (input: any): any => ({
                    value: input.value as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    ObjectGenericAlias.SPOILERS,
);
