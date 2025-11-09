import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_isFunctionAsync_TemplateUnion =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("TemplateUnion")(TemplateUnion)(
      (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
        typia.functional.isFunction(p),
    );
