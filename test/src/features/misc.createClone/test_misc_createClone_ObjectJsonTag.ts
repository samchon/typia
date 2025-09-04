import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_createClone_ObjectJsonTag = (): void =>
  _test_misc_clone("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
    typia.misc.createClone<ObjectJsonTag>(),
  );
