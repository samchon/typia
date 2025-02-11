import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_assertEqualsParameters_ObjectUnionExplicit =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ObjectUnionExplicit",
  )(ObjectUnionExplicit)(
    (p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) =>
      typia.functional.assertEqualsParameters(p),
  );
