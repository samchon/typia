import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertEqualsReturnAsync_ObjectUnionImplicit =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ObjectUnionImplicit",
  )(ObjectUnionImplicit)(
    (p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
      typia.functional.assertEqualsReturn(p),
  );
