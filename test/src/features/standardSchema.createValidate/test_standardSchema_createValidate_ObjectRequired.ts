import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_standardSchema_createValidate_ObjectRequired = (): void =>
  _test_standardSchema_validate("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )(typia.createValidate<ObjectRequired>());
