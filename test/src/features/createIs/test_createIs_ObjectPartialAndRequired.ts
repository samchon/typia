import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_createIs_ObjectPartialAndRequired = (): void =>
  _test_is("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )(typia.createIs<ObjectPartialAndRequired>());
