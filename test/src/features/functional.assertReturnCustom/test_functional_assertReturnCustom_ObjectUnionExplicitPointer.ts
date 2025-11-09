import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ObjectUnionExplicitPointer = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ObjectUnionExplicitPointer"
)(ObjectUnionExplicitPointer)(
  (p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)