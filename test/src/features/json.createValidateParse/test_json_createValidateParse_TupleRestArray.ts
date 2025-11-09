import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_createValidateParse_TupleRestArray = (): void =>
  _test_json_validateParse("TupleRestArray")<TupleRestArray>(TupleRestArray)(
    typia.json.createValidateParse<TupleRestArray>(),
  );
