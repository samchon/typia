import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_isReturn_SetAlias = (): void =>
  _test_functional_isReturn("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => SetAlias) => typia.functional.isReturn(p),
  );
