import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_createIsClone_ObjectAlias = (): void =>
  _test_misc_isClone("ObjectAlias")<ObjectAlias>(ObjectAlias)(
    typia.misc.createIsClone<ObjectAlias>(),
  );
