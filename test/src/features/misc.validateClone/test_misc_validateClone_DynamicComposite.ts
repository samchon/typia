import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_validateClone_DynamicComposite =
  _test_misc_validateClone("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )((input) => typia.misc.validateClone<DynamicComposite>(input));
