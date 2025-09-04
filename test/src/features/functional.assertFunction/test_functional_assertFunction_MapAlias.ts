import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapAlias } from "../../structures/MapAlias";

export const test_functional_assertFunction_MapAlias = (): void =>
  _test_functional_assertFunction(TypeGuardError)("MapAlias")(MapAlias)(
    (p: (input: MapAlias) => MapAlias) => typia.functional.assertFunction(p),
  );
