import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectUnionDouble = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ObjectUnionDouble"
)(ObjectUnionDouble)(
  (p: (input: ObjectUnionDouble) => ObjectUnionDouble) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)