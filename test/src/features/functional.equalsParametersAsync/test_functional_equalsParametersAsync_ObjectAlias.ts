import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_equalsParametersAsync_ObjectAlias =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ObjectAlias")(ObjectAlias)(
      (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
        typia.functional.equalsParameters(p),
    );
