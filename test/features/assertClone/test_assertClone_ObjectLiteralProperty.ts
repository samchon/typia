import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectLiteralProperty = _test_assertClone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.assertClone(input),
    ObjectLiteralProperty.SPOILERS,
);
