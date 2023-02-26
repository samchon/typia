import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_validateParse_ObjectLiteralProperty = _test_validateParse(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.validateParse<ObjectLiteralProperty>(input),
    ObjectLiteralProperty.SPOILERS,
);
