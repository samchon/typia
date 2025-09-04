import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertEqualsParametersAsync_ObjectUnionComposite =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ObjectUnionComposite",
    )(ObjectUnionComposite)(
      (p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
        typia.functional.assertEqualsParameters(p),
    );
