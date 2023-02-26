import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_assertClone_ObjectLiteralProperty = _test_assertClone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.assertClone(input),
    ObjectLiteralProperty.SPOILERS,
);
