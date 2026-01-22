import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_createAssertClone_ObjectGenericAlias = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)(
    typia.misc.createAssertClone<ObjectGenericAlias>(),
  );
