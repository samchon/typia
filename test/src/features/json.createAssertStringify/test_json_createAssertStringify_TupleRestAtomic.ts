import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_createAssertStringify_TupleRestAtomic = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "TupleRestAtomic",
  )<TupleRestAtomic>(TupleRestAtomic)(
    typia.json.createAssertStringify<TupleRestAtomic>(),
  );
