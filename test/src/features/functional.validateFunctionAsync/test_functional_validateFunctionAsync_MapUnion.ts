import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_validateFunctionAsync_MapUnion = (): Promise<void> => _test_functional_validateFunctionAsync(
  "MapUnion"
)(MapUnion)(
  (p: (input: MapUnion) => Promise<MapUnion>) =>
    typia.functional.validateFunction(p),
)