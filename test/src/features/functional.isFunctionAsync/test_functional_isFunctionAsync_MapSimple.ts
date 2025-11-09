import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_isFunctionAsync_MapSimple = (): Promise<void> =>
  _test_functional_isFunctionAsync("MapSimple")(MapSimple)(
    (p: (input: MapSimple) => Promise<MapSimple>) =>
      typia.functional.isFunction(p),
  );
