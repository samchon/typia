import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertReturnAsync_ObjectUnionImplicit =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectUnionImplicit")(
    ObjectUnionImplicit,
  )((p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
    typia.functional.assertReturn(p),
  );
