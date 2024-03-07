import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_isFunctionAsync_MapAlias =
  _test_functional_isFunctionAsync("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => Promise<MapAlias>) =>
      typia.functional.isFunction(p),
  );
