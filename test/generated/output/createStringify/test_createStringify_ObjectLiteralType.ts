import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ObjectLiteralType = _test_stringify("ObjectLiteralType", ObjectLiteralType.generate, (input: { id: string; name: string; age: number; }): string => {
    const $string = (typia.createStringify as any).string;
    return `{"id":${$string(input.id)},"name":${$string(input.name)},"age":${input.age}}`;
});
