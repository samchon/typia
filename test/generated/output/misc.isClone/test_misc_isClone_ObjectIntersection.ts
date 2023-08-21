import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_misc_isClone_ObjectIntersection = _test_misc_isClone(
    "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)((input) =>
    ((input: any): typia.Primitive<ObjectIntersection> | null => {
        const is = (input: any): input is ObjectIntersection => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).email &&
                "string" === typeof (input as any).name &&
                "boolean" === typeof (input as any).vulnerable
            );
        };
        const clone = (
            input: ObjectIntersection,
        ): typia.Primitive<ObjectIntersection> => {
            const $co0 = (input: any): any => ({
                email: input.email as any,
                name: input.name as any,
                vulnerable: input.vulnerable as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    })(input),
);
