import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectHttpTypeTag = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ObjectHttpTypeTag"
)(ObjectHttpTypeTag)(
  (p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)