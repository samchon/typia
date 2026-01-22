import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_isPrune_ObjectRequired = (): void =>
  _test_misc_isPrune("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    (input) => typia.misc.isPrune<ObjectRequired>(input),
  );
