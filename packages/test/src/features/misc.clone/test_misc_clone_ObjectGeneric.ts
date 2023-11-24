import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_clone_ObjectGeneric = _test_misc_clone(
  "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)((input) =>
  typia.misc.clone<ObjectGeneric>(input),
);
