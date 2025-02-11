import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertParametersAsync_ObjectUnionComposite =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ObjectUnionComposite",
  )(ObjectUnionComposite)(
    (p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
      typia.functional.assertParameters(p),
  );
