import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_assertParseCustom_TupleRestArray = (): void =>
  _test_json_assertParse(CustomGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )((input) =>
    typia.json.assertParse<TupleRestArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
