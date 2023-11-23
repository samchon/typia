import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_createIsStringify_TupleRestArray =
  _test_json_isStringify("TupleRestArray")<TupleRestArray>(TupleRestArray)(
    typia.json.createIsStringify<TupleRestArray>(),
  );
