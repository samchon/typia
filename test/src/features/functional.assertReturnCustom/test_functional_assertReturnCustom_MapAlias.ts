import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapAlias } from "../../structures/MapAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_MapAlias =
  _test_functional_assertReturn(CustomGuardError)("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => MapAlias) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
