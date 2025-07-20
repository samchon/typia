import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_isReturn_MapUnion = (): void =>
  _test_functional_isReturn("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => MapUnion) => typia.functional.isReturn(p),
  );
