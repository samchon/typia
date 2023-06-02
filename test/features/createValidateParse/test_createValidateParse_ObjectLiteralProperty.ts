import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createValidateParse_ObjectLiteralProperty =
    _test_validateParse(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        typia.createValidateParse<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
