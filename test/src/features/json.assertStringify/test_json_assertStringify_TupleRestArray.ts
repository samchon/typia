import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_TupleRestArray =
  _test_json_assertStringify(TypeGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )((input) => typia.json.assertStringify<TupleRestArray>(input));
