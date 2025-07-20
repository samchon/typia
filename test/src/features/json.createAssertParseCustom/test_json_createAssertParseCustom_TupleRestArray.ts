import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_createAssertParseCustom_TupleRestArray = (): void =>
  _test_json_assertParse(CustomGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )(
    typia.json.createAssertParse<TupleRestArray>(
      (p) => new CustomGuardError(p),
    ),
  );
