import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_validateFunctionAsync_TemplateUnion =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("TemplateUnion")(TemplateUnion)(
      (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
        typia.functional.validateFunction(p),
    );
