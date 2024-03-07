import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_TupleRestAtomic =
  _test_json_assertParse(CustomGuardError)("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )(
    typia.json.createAssertParse<TupleRestAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
