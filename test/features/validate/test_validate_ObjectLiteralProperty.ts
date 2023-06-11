import typia from "../../../src";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_ObjectLiteralProperty = _test_validate(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.validate(input),
    ObjectLiteralProperty.SPOILERS,
);
