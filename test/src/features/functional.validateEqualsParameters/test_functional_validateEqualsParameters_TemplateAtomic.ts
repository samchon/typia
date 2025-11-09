import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_validateEqualsParameters_TemplateAtomic =
  (): void =>
    _test_functional_validateEqualsParameters("TemplateAtomic")(TemplateAtomic)(
      (p: (input: TemplateAtomic) => TemplateAtomic) =>
        typia.functional.validateEqualsParameters(p),
    );
