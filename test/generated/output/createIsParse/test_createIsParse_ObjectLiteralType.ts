import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_createIsParse_ObjectLiteralType = _test_isParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input: any): typia.Primitive<ObjectLiteralType> => {
        const is: any = (input: any): input is ObjectLiteralType => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age)
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
    ObjectLiteralType.SPOILERS,
);
