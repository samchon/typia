import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_assertParse_ObjectLiteralProperty = _test_assertParse(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.assertParse<ObjectLiteralProperty>(input),
    ObjectLiteralProperty.SPOILERS,
);
