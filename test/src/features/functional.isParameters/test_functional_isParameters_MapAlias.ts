import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_isParameters_MapAlias =
  _test_functional_isParameters("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => MapAlias) => typia.functional.isParameters(p),
  );
