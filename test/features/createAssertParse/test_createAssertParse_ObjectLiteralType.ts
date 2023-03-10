import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssertParse_ObjectLiteralType = _test_assertParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createAssertParse<ObjectLiteralType>(),
    ObjectLiteralType.SPOILERS,
);
