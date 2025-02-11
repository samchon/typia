import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_assertEqualsParametersCustom_ObjectUnionExplicit =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "ObjectUnionExplicit",
  )(ObjectUnionExplicit)(
    (p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
