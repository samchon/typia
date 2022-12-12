import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectLiteralType = _test_validate(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createValidate<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
