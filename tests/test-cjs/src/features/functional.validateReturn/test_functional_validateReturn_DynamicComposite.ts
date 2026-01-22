import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_validateReturn_DynamicComposite = (): void =>
  _test_functional_validateReturn("DynamicComposite")(DynamicComposite)(
    (p: (input: DynamicComposite) => DynamicComposite) =>
      typia.functional.validateReturn(p),
  );
