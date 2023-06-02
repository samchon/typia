import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createValidatePrune_ObjectLiteralProperty =
    _test_validatePrune(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        typia.createValidatePrune<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
