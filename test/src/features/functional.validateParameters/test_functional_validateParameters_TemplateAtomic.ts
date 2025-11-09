import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_validateParameters_TemplateAtomic = (): void =>
  _test_functional_validateParameters("TemplateAtomic")(TemplateAtomic)(
    (p: (input: TemplateAtomic) => TemplateAtomic) =>
      typia.functional.validateParameters(p),
  );
