import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ObjectUnionCompositePointer = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ObjectUnionCompositePointer"
)(ObjectUnionCompositePointer)(
  (p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)