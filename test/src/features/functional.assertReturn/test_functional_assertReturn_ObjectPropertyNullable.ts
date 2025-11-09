import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ObjectPropertyNullable = (): void => _test_functional_assertReturn(TypeGuardError)(
  "ObjectPropertyNullable"
)(ObjectPropertyNullable)(
  (p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) => typia.functional.assertReturn(p),
)