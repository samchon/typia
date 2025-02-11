import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_isReturn_MapAlias = _test_functional_isReturn(
  "MapAlias"
)(MapAlias)(
  (p: (input: MapAlias) => MapAlias) => typia.functional.isReturn(p),
)