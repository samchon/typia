import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_isFunctionAsync_MapUnion = (): Promise<void> =>
  _test_functional_isFunctionAsync("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => Promise<MapUnion>) =>
      typia.functional.isFunction(p),
  );
