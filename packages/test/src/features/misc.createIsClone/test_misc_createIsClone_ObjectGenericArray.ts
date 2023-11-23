import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_createIsClone_ObjectGenericArray = _test_misc_isClone(
  "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)(
  typia.misc.createIsClone<ObjectGenericArray>(),
);
