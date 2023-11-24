import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_createAssertGuardEquals_ObjectClosure =
  _test_assertGuardEquals("ObjectClosure")<ObjectClosure>(ObjectClosure)(
    typia.createAssertGuardEquals<ObjectClosure>(),
  );
