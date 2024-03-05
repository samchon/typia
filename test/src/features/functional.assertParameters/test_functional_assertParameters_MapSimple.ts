import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_assertParameters_MapSimple =
  _test_functional_assertParameters(TypeGuardError)("MapSimple")(MapSimple)(
    (p: (input: MapSimple) => MapSimple) =>
      typia.functional.assertParameters(p),
  );
