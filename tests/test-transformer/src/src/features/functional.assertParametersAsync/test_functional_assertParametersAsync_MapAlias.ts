import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapAlias } from "../../structures/MapAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_MapAlias = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "MapAlias"
)(MapAlias)(
  (p: (input: MapAlias) => Promise<MapAlias>) =>
    typia.functional.assertParameters(p),
)