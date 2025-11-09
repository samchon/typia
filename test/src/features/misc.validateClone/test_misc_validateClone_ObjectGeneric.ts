import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_validateClone_ObjectGeneric = (): void =>
  _test_misc_validateClone("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
    (input) => typia.misc.validateClone<ObjectGeneric>(input),
  );
