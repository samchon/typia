import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_createAssertStringify_TupleRestArray =
  _test_json_assertStringify("TupleRestArray")<TupleRestArray>(TupleRestArray)(
    typia.json.createAssertStringify<TupleRestArray>(),
  );
