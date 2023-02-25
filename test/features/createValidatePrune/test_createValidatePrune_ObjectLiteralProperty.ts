import typia from "../../../src";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectLiteralProperty = _test_validatePrune(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    typia.createValidatePrune<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
