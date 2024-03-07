import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { TypeGuardError } from "typia";

export const test_assertEquals_DynamicComposite = _test_assertEquals(
  TypeGuardError,
)("DynamicComposite")<DynamicComposite>(DynamicComposite)((input) =>
  typia.assertEquals<DynamicComposite>(input),
);
