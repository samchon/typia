import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_validateFunction_MapAlias =
  _test_functional_validateFunction("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => MapAlias) => typia.functional.validateFunction(p),
  );
