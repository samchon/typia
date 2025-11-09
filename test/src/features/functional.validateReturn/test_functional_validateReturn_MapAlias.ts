import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_validateReturn_MapAlias = (): void =>
  _test_functional_validateReturn("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => MapAlias) => typia.functional.validateReturn(p),
  );
