import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_validateReturn_MapUnion = (): void => _test_functional_validateReturn(
  "MapUnion"
)(MapUnion)(
  (p: (input: MapUnion) => MapUnion) => typia.functional.validateReturn(p),
)