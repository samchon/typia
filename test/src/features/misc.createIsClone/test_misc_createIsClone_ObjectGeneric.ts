import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_createIsClone_ObjectGeneric = (): void =>
  _test_misc_isClone("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
    typia.misc.createIsClone<ObjectGeneric>(),
  );
