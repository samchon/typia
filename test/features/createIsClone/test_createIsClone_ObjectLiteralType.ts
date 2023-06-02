import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createIsClone_ObjectLiteralType = _test_isClone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createIsClone<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
