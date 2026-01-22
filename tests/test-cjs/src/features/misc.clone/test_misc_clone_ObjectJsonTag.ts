import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_clone_ObjectJsonTag = (): void =>
  _test_misc_clone("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)((input) =>
    typia.misc.clone<ObjectJsonTag>(input),
  );
