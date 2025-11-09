import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_createAssertCustom_ObjectClosure = (): void =>
  _test_assert(CustomGuardError)("ObjectClosure")<ObjectClosure>(ObjectClosure)(
    typia.createAssert<ObjectClosure>((p) => new CustomGuardError(p)),
  );
