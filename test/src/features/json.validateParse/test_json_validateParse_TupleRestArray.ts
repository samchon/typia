import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_validateParse_TupleRestArray = (): void =>
  _test_json_validateParse("TupleRestArray")<TupleRestArray>(TupleRestArray)(
    (input) => typia.json.validateParse<TupleRestArray>(input),
  );
