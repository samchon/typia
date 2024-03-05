import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_validateParameters_MapAlias =
  _test_functional_validateParameters("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => MapAlias) =>
      typia.functional.validateParameters(p),
  );
