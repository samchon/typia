import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_validateEqualsFunction_TemplateUnion = (): void =>
  _test_functional_validateEqualsFunction("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => TemplateUnion) =>
      typia.functional.validateEqualsFunction(p),
  );
