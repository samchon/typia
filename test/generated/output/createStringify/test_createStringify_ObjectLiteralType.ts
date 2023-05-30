import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
export const test_createStringify_ObjectLiteralType = _test_stringify("ObjectLiteralType", ObjectLiteralType.generate, (input: ObjectLiteralType): string => {
    const $string = (typia.createStringify as any).string;
    const $number = (typia.createStringify as any).number;
    return `{"id":${$string(input.id)},"name":${$string(input.name)},"age":${$number(input.age)}}`;
});
