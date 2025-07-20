import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_equalsReturnAsync_TemplateAtomic =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("TemplateAtomic")(TemplateAtomic)(
      (p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
        typia.functional.equalsReturn(p),
    );
