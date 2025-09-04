import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_equalsFunction_TemplateUnion = (): void =>
  _test_functional_equalsFunction("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => TemplateUnion) =>
      typia.functional.equalsFunction(p),
  );
