import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_assertReturnCustom_MapAlias = (): void =>
  _test_functional_assertReturn(CustomGuardError)("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => MapAlias) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
