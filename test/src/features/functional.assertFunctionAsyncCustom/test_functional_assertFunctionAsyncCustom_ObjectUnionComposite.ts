import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertFunctionAsyncCustom_ObjectUnionComposite =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "ObjectUnionComposite",
  )(ObjectUnionComposite)(
    (p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
