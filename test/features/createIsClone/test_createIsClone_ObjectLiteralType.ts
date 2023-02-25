import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectLiteralType = _test_isClone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createIsClone<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
