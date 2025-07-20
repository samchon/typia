import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_isReturn_TemplateUnion = (): void =>
  _test_functional_isReturn("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => TemplateUnion) =>
      typia.functional.isReturn(p),
  );
