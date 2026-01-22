import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_misc_clone_DynamicNever = (): void =>
  _test_misc_clone("DynamicNever")<DynamicNever>(DynamicNever)((input) =>
    typia.misc.clone<DynamicNever>(input),
  );
