import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_validateParametersAsync_MapAlias = (): Promise<void> => _test_functional_validateParametersAsync(
  "MapAlias"
)(MapAlias)(
  (p: (input: MapAlias) => Promise<MapAlias>) =>
    typia.functional.validateParameters(p),
)