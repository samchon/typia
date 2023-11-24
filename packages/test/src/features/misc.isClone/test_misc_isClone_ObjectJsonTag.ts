import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_isClone_ObjectJsonTag = _test_misc_isClone(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input) =>
  typia.misc.isClone<ObjectJsonTag>(input),
);
