import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_createIsClone_ObjectGenericAlias = _test_isClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input: any): typia.Primitive<ObjectGenericAlias> | null => {
        const is: any = (input: any): input is ObjectGenericAlias => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.value
            );
        };
        const clone: any = (
            input: ObjectGenericAlias,
        ): typia.Primitive<ObjectGenericAlias> => {
            const $co0: any = (input: any): any => ({
                value: input.value as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    ObjectGenericAlias.SPOILERS,
);
