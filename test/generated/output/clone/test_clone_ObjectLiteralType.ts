import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
export const test_clone_ObjectLiteralType = _test_clone("ObjectLiteralType", ObjectLiteralType.generate, (input) => ((input: {    id: string;    name: string;    age: number;}): typia.Primitive<{    id: string;    name: string;    age: number;}> => {
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        age: input.age as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
})(input));
