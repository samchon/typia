import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ObjectUnionComposite =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectUnionComposite")(
    ObjectUnionComposite,
  )((p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
    typia.functional.assertFunction(p),
  );
