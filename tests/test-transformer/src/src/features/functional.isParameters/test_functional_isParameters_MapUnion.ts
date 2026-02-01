import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_isParameters_MapUnion = (): void => _test_functional_isParameters(
  "MapUnion"
)(MapUnion)(
  (p: (input: MapUnion) => MapUnion) => typia.functional.isParameters(p),
)