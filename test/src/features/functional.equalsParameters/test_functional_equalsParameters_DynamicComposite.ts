import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_equalsParameters_DynamicComposite = (): void =>
  _test_functional_equalsParameters("DynamicComposite")(DynamicComposite)(
    (p: (input: DynamicComposite) => DynamicComposite) =>
      typia.functional.equalsParameters(p),
  );
