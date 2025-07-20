import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_assertParametersCustom_MapUnion = (): void =>
  _test_functional_assertParameters(CustomGuardError)("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => MapUnion) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
