import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_isParametersAsync_MapUnion = (): Promise<void> => _test_functional_isParametersAsync(
  "MapUnion"
)(MapUnion)(
  (p: (input: MapUnion) => Promise<MapUnion>) =>
    typia.functional.isParameters(p),
)