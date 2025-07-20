import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { MapSimple } from "../../structures/MapSimple";

export const test_functional_validateReturn_MapSimple = (): void =>
  _test_functional_validateReturn("MapSimple")(MapSimple)(
    (p: (input: MapSimple) => MapSimple) => typia.functional.validateReturn(p),
  );
