import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createValidateClone_ObjectLiteralType = _test_validateClone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createValidateClone<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
