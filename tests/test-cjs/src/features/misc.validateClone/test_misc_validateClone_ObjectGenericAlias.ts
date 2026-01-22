import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_validateClone_ObjectGenericAlias = (): void =>
  _test_misc_validateClone("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )((input) => typia.misc.validateClone<ObjectGenericAlias>(input));
