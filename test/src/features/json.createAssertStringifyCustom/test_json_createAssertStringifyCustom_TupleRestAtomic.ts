import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_createAssertStringifyCustom_TupleRestAtomic = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "TupleRestAtomic",
  )<TupleRestAtomic>(TupleRestAtomic)(
    typia.json.createAssertStringify<TupleRestAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
