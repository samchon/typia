import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectLiteralProperty = _test_validatePrune(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.validatePrune(input),
    ObjectLiteralProperty.SPOILERS,
);