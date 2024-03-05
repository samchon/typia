import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_validateParameters_TemplateUnion =
  _test_functional_validateParameters("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => TemplateUnion) =>
      typia.functional.validateParameters(p),
  );
