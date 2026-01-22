import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_prune_ObjectPropertyNullable = (): void =>
  _test_misc_prune("ObjectPropertyNullable")<ObjectPropertyNullable>(
    ObjectPropertyNullable,
  )((input) => typia.misc.prune<ObjectPropertyNullable>(input));
