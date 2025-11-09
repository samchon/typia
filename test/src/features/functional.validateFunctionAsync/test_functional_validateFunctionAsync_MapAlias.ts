import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_validateFunctionAsync_MapAlias = (): Promise<void> => _test_functional_validateFunctionAsync(
  "MapAlias"
)(MapAlias)(
  (p: (input: MapAlias) => Promise<MapAlias>) =>
    typia.functional.validateFunction(p),
)