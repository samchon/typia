import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_createIsClone_ObjectInternal = _test_isClone(
    "ObjectInternal",
    ObjectInternal.generate,
    (input: any): typia.Primitive<ObjectInternal> | null => {
        const is: any = (input: any): input is ObjectInternal => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.id &&
                "string" === typeof input.name
            );
        };
        const clone: any = (
            input: ObjectInternal,
        ): typia.Primitive<ObjectInternal> => {
            const $co0: any = (input: any): any => ({
                id: input.id as any,
                name: input.name as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    ObjectInternal.SPOILERS,
);
