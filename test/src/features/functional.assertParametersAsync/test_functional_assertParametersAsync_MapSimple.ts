import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_assertParametersAsync_MapSimple =
  _test_functional_assertParametersAsync(TypeGuardError)("MapSimple")(
    MapSimple,
  )((p: (input: MapSimple) => Promise<MapSimple>) =>
    typia.functional.assertParameters(p),
  );
