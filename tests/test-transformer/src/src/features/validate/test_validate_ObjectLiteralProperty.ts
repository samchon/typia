import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_validate_ObjectLiteralProperty = (): void => _test_validate(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)((input) => typia.validate<ObjectLiteralProperty>(input));
