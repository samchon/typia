import typia from "../../../src";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectLiteralProperty = _test_validateEquals(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    typia.createValidateEquals<ObjectLiteralProperty>(),
);
