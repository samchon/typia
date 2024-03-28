import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_assertReturnAsync_MapAlias =
  _test_functional_assertReturnAsync(TypeGuardError)("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => Promise<MapAlias>) =>
      typia.functional.assertReturn(p),
  );
