import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectLiteralProperty = _test_assertPrune(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.assertPrune(input),
    ObjectLiteralProperty.SPOILERS,
);