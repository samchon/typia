import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_stringify_ObjectLiteralType = _test_stringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) =>
        ((input: { id: string; name: string; age: number }): string => {
            const $string: any = (typia.stringify as any).string;
            const $number: any = (typia.stringify as any).number;
            return `{"id":${$string(input.id)},"name":${$string(
                input.name,
            )},"age":${$number(input.age)}}`;
        })(input),
);
