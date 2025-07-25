import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_validateClone_ObjectUnionImplicit = (): void =>
  _test_misc_validateClone("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )((input) => typia.misc.validateClone<ObjectUnionImplicit>(input));
