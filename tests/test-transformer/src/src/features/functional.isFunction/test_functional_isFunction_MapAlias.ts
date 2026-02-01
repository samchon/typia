import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_isFunction_MapAlias = (): void => _test_functional_isFunction(
  "MapAlias"
)(MapAlias)(
  (p: (input: MapAlias) => MapAlias) => typia.functional.isFunction(p),
)