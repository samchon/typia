import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_standardSchema_createValidate_ObjectLiteralProperty =
  (): void =>
    _test_standardSchema_validate(
      "ObjectLiteralProperty",
    )<ObjectLiteralProperty>(ObjectLiteralProperty)(
      typia.createValidate<ObjectLiteralProperty>(),
    );
