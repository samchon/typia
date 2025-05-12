import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_assertParametersCustom_MapSimple =
  _test_functional_assertParameters(CustomGuardError)("MapSimple")(MapSimple)(
    (p: (input: MapSimple) => MapSimple) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
