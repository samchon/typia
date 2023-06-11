import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_validatePrune_ObjectLiteralProperty = _test_validatePrune(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.validatePrune(input),
    ObjectLiteralProperty.SPOILERS,
);
