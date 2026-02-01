import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_validateFunctionAsync_MapSimple = (): Promise<void> => _test_functional_validateFunctionAsync(
  "MapSimple"
)(MapSimple)(
  (p: (input: MapSimple) => Promise<MapSimple>) =>
    typia.functional.validateFunction(p),
)