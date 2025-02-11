import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertEqualsParameters_ObjectUnionComposite =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ObjectUnionComposite",
  )(ObjectUnionComposite)(
    (p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
      typia.functional.assertEqualsParameters(p),
  );
