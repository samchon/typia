import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_createIsStringify_TupleRestAtomic = (): void =>
  _test_json_isStringify("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)(
    typia.json.createIsStringify<TupleRestAtomic>(),
  );
