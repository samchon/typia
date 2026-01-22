import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_isParametersAsync_ObjectAlias =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ObjectAlias")(ObjectAlias)(
      (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
        typia.functional.isParameters(p),
    );
