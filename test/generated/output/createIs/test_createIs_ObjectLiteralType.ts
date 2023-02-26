import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_createIs_ObjectLiteralType = _test_is(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input: any): input is { id: string; name: string; age: number } => {
        return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age &&
            Number.isFinite(input.age)
        );
    },
    ObjectLiteralType.SPOILERS,
);
