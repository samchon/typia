import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_isParametersAsync_MapAlias = _test_functional_isParametersAsync(
  "MapAlias"
)(MapAlias)(
  (p: (input: MapAlias) => Promise<MapAlias>) =>
    typia.functional.isParameters(p),
)