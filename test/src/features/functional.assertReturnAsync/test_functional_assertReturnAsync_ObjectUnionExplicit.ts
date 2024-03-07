import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectUnionExplicit =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectUnionExplicit")(
    ObjectUnionExplicit,
  )((p: (input: ObjectUnionExplicit) => Promise<ObjectUnionExplicit>) =>
    typia.functional.assertReturn(p),
  );
