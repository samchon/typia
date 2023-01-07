import typia from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectLiteralType = _test_isParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createIsParse<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);