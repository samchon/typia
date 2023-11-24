import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_createAssertParse_TupleRestArray =
  _test_json_assertParse("TupleRestArray")<TupleRestArray>(TupleRestArray)(
    typia.json.createAssertParse<TupleRestArray>(),
  );
