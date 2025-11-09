import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_isClone_ObjectPartialAndRequired = (): void =>
  _test_misc_isClone("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )((input) => typia.misc.isClone<ObjectPartialAndRequired>(input));
