import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_validateReturn_TemplateUnion =
  _test_functional_validateReturn("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => TemplateUnion) =>
      typia.functional.validateReturn(p),
  );
