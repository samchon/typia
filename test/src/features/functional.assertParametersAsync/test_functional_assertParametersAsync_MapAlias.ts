import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_assertParametersAsync_MapAlias =
  _test_functional_assertParametersAsync(TypeGuardError)("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => Promise<MapAlias>) =>
      typia.functional.assertParameters(p),
  );
