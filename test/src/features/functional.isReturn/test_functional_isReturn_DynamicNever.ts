import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_isReturn_DynamicNever = (): void =>
  _test_functional_isReturn("DynamicNever")(DynamicNever)(
    (p: (input: DynamicNever) => DynamicNever) => typia.functional.isReturn(p),
  );
