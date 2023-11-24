import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_createAssertClone_ObjectGenericAlias =
  _test_misc_assertClone("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )(typia.misc.createAssertClone<ObjectGenericAlias>());
