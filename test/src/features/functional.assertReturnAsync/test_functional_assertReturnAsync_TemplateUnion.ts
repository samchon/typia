import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertReturnAsync_TemplateUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("TemplateUnion")(
      TemplateUnion,
    )((p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
      typia.functional.assertReturn(p),
    );
