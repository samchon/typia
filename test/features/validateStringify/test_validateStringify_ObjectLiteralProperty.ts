import typia from "typia";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectLiteralProperty = _test_validateStringify(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.validateStringify(input),
    ObjectLiteralProperty.SPOILERS,
);
