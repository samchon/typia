import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_validateParameters_MapSimple = (): void =>
  _test_functional_validateParameters("MapSimple")(MapSimple)(
    (p: (input: MapSimple) => MapSimple) =>
      typia.functional.validateParameters(p),
  );
