import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_equalsParametersAsync_ObjectPartial =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ObjectPartial")(ObjectPartial)(
      (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
        typia.functional.equalsParameters(p),
    );
