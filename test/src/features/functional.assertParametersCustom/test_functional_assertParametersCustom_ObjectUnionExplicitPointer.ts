import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ObjectUnionExplicitPointer =
  _test_functional_assertParameters(CustomGuardError)(
    "ObjectUnionExplicitPointer",
  )(ObjectUnionExplicitPointer)(
    (p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
