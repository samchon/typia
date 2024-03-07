import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_validateReturnAsync_MapUnion =
  _test_functional_validateReturnAsync("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => Promise<MapUnion>) =>
      typia.functional.validateReturn(p),
  );
