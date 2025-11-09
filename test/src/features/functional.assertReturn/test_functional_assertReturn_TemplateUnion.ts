import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_TemplateUnion = (): void => _test_functional_assertReturn(TypeGuardError)(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => TemplateUnion) => typia.functional.assertReturn(p),
)