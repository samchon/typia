import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_createIsClone_ObjectUnionImplicit = (): void =>
  _test_misc_isClone("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )(typia.misc.createIsClone<ObjectUnionImplicit>());
