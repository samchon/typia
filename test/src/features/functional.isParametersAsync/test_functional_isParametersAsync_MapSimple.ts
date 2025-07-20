import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_isParametersAsync_MapSimple = (): Promise<void> =>
  _test_functional_isParametersAsync("MapSimple")(MapSimple)(
    (p: (input: MapSimple) => Promise<MapSimple>) =>
      typia.functional.isParameters(p),
  );
