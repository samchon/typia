import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_createClone_ObjectPartial = (): void =>
  _test_misc_clone("ObjectPartial")<ObjectPartial>(ObjectPartial)(
    typia.misc.createClone<ObjectPartial>(),
  );
