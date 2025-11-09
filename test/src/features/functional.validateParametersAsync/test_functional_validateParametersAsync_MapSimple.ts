import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_validateParametersAsync_MapSimple =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("MapSimple")(MapSimple)(
      (p: (input: MapSimple) => Promise<MapSimple>) =>
        typia.functional.validateParameters(p),
    );
