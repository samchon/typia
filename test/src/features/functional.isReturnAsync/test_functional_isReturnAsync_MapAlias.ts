import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_isReturnAsync_MapAlias = (): Promise<void> =>
  _test_functional_isReturnAsync("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => Promise<MapAlias>) => typia.functional.isReturn(p),
  );
