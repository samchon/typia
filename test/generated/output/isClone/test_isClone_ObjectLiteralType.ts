import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_isClone_ObjectLiteralType = _test_isClone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<{
            id: string;
            name: string;
            age: number;
        }> | null => {
            const is: any = (
                input: any,
            ): input is { id: string; name: string; age: number } => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age)
                );
            };
            const clone: any = (input: {
                id: string;
                name: string;
                age: number;
            }): typia.Primitive<{ id: string; name: string; age: number }> => {
                const $co0: any = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    age: input.age as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    ObjectLiteralType.SPOILERS,
);
