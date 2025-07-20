import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_isPrune_ObjectGenericAlias = (): void =>
  _test_misc_isPrune("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )((input) => typia.misc.isPrune<ObjectGenericAlias>(input));
