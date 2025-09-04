import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_equalsParametersAsync_ObjectJsonTag =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ObjectJsonTag")(ObjectJsonTag)(
      (p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
        typia.functional.equalsParameters(p),
    );
