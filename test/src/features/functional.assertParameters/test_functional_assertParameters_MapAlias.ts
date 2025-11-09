import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_assertParameters_MapAlias = (): void =>
  _test_functional_assertParameters(TypeGuardError)("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => MapAlias) => typia.functional.assertParameters(p),
  );
