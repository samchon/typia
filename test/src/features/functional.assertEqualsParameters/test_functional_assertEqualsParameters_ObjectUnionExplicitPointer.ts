import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ObjectUnionExplicitPointer =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ObjectUnionExplicitPointer",
  )(ObjectUnionExplicitPointer)(
    (p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
      typia.functional.assertEqualsParameters(p),
  );
