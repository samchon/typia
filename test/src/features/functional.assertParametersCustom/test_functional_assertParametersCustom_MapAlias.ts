import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapAlias } from "../../structures/MapAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_MapAlias = (): void => _test_functional_assertParameters(CustomGuardError)(
  "MapAlias"
)(MapAlias)(
  (p: (input: MapAlias) => MapAlias) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)