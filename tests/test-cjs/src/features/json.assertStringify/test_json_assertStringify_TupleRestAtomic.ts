import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_assertStringify_TupleRestAtomic = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "TupleRestAtomic",
  )<TupleRestAtomic>(TupleRestAtomic)((input) =>
    typia.json.assertStringify<TupleRestAtomic>(input),
  );
