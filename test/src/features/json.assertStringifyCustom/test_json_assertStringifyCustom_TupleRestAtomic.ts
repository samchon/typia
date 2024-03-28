import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_assertStringifyCustom_TupleRestAtomic =
  _test_json_assertStringify(CustomGuardError)(
    "TupleRestAtomic",
  )<TupleRestAtomic>(TupleRestAtomic)((input) =>
    typia.json.assertStringify<TupleRestAtomic>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
