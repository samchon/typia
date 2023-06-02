import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_assertParse_ObjectLiteralType = _test_assertParse(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => typia.assertParse<ObjectLiteralType>(input),
    ObjectLiteralType.SPOILERS,
);
