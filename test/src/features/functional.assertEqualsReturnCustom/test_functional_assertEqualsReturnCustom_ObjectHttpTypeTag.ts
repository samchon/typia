import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectHttpTypeTag = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ObjectHttpTypeTag"
)(ObjectHttpTypeTag)(
  (p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)