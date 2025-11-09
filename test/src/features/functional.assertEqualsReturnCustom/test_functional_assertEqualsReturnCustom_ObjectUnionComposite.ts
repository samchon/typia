import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectUnionComposite = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ObjectUnionComposite"
)(ObjectUnionComposite)(
  (p: (input: ObjectUnionComposite) => ObjectUnionComposite) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)