import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_createIsParse_ObjectLiteralType = _test_isParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input: any): typia.Primitive<ObjectLiteralType> => {
        const is = (input: any): input is ObjectLiteralType => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).id &&
                "string" === typeof (input as any).name &&
                "number" === typeof (input as any).age &&
                Number.isFinite((input as any).age)
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
    ObjectLiteralType.SPOILERS,
);
