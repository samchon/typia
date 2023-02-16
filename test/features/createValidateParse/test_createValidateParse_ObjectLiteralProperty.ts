import typia from "typia";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectLiteralProperty = _test_validateParse(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    typia.createValidateParse<ObjectLiteralProperty>(),
    ObjectLiteralProperty.SPOILERS,
);
