import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_TemplateUnion = (): void => _test_functional_assertParameters(TypeGuardError)(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => TemplateUnion) => typia.functional.assertParameters(p),
)