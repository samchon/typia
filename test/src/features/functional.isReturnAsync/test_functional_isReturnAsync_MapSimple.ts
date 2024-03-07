import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_isReturnAsync_MapSimple =
  _test_functional_isReturnAsync("MapSimple")(MapSimple)(
    (p: (input: MapSimple) => Promise<MapSimple>) =>
      typia.functional.isReturn(p),
  );
