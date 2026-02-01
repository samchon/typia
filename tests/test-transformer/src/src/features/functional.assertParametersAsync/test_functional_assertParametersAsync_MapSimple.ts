import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapSimple } from "../../structures/MapSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_MapSimple = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "MapSimple"
)(MapSimple)(
  (p: (input: MapSimple) => Promise<MapSimple>) =>
    typia.functional.assertParameters(p),
)