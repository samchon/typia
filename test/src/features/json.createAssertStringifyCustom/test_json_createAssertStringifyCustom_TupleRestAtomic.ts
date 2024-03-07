import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_TupleRestAtomic =
  _test_json_assertStringify(CustomGuardError)(
    "TupleRestAtomic",
  )<TupleRestAtomic>(TupleRestAtomic)(
    typia.json.createAssertStringify<TupleRestAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
