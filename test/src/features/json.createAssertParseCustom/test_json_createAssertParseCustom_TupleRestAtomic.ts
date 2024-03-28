import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_createAssertParseCustom_TupleRestAtomic =
  _test_json_assertParse(CustomGuardError)("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )(
    typia.json.createAssertParse<TupleRestAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
