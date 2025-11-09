import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { MapUnion } from "../../structures/MapUnion";

export const test_functional_isReturnAsync_MapUnion = (): Promise<void> =>
  _test_functional_isReturnAsync("MapUnion")(MapUnion)(
    (p: (input: MapUnion) => Promise<MapUnion>) => typia.functional.isReturn(p),
  );
