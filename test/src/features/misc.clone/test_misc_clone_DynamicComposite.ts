import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_clone_DynamicComposite = (): void =>
  _test_misc_clone("DynamicComposite")<DynamicComposite>(DynamicComposite)(
    (input) => typia.misc.clone<DynamicComposite>(input),
  );
