import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_createClone_ObjectUnionExplicit = (): void =>
  _test_misc_clone("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )(typia.misc.createClone<ObjectUnionExplicit>());
