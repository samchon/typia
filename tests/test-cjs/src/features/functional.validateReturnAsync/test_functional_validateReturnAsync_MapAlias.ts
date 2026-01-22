import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_validateReturnAsync_MapAlias = (): Promise<void> =>
  _test_functional_validateReturnAsync("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => Promise<MapAlias>) =>
      typia.functional.validateReturn(p),
  );
