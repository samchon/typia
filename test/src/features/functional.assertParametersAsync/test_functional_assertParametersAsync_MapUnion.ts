import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapUnion } from "../../structures/MapUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_MapUnion =
  _test_functional_assertParametersAsync(TypeGuardError)("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => Promise<MapUnion>) =>
      typia.functional.assertParameters(p),
  );
