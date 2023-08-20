import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_stringify_ObjectLiteralType = _test_stringify(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) =>
        ((input: ObjectLiteralType): string => {
            const $string = (typia.stringify as any).string;
            const $number = (typia.stringify as any).number;
            return `{"id":${$string((input as any).id)},"name":${$string(
                (input as any).name,
            )},"age":${$number((input as any).age)}}`;
        })(input),
);
