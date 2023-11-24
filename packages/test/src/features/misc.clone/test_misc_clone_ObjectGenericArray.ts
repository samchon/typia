import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_clone_ObjectGenericArray = _test_misc_clone(
  "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)((input) =>
  typia.misc.clone<ObjectGenericArray>(input),
);
