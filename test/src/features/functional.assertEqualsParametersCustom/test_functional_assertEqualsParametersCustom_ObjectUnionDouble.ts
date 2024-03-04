import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertEqualsParametersCustom_ObjectUnionDouble =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "ObjectUnionDouble",
  )(ObjectUnionDouble)((p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
