import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createIsParse_ObjectLiteralType = _test_isParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createIsParse<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
