import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ObjectUnionComposite =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "ObjectUnionComposite",
  )(ObjectUnionComposite)(
    (p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
