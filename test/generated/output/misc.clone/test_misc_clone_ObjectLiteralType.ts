import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_misc_clone_ObjectLiteralType =
    _test_misc_clone<ObjectLiteralType>(ObjectLiteralType)((input) =>
        ((input: ObjectLiteralType): typia.Primitive<ObjectLiteralType> => {
            const $co0 = (input: any): any => ({
                id: input.id as any,
                name: input.name as any,
                age: input.age as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        })(input),
    );
