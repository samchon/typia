import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_createValidate_ObjectPartialAndRequired = (): void =>
  _test_validate("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )(typia.createValidate<ObjectPartialAndRequired>());
