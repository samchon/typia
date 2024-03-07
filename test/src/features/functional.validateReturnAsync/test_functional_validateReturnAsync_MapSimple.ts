import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_validateReturnAsync_MapSimple =
  _test_functional_validateReturnAsync("MapSimple")(MapSimple)(
    (p: (input: MapSimple) => Promise<MapSimple>) =>
      typia.functional.validateReturn(p),
  );
