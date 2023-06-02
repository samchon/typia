import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_isClone_ObjectIntersection = _test_isClone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<
            ObjectIntersection.IEmail & ObjectIntersection.IName
        > | null => {
            const is: any = (
                input: any,
            ): input is ObjectIntersection.IEmail &
                ObjectIntersection.IName => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.email &&
                    "string" === typeof input.name &&
                    "boolean" === typeof input.vulnerable
                );
            };
            const clone: any = (
                input: ObjectIntersection.IEmail & ObjectIntersection.IName,
            ): typia.Primitive<
                ObjectIntersection.IEmail & ObjectIntersection.IName
            > => {
                const $co0: any = (input: any): any => ({
                    email: input.email as any,
                    name: input.name as any,
                    vulnerable: input.vulnerable as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    ObjectIntersection.SPOILERS,
);
