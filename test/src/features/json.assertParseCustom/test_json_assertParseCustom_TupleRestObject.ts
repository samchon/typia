import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_TupleRestObject =
  _test_json_assertParse(CustomGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )((input) =>
    typia.json.assertParse<TupleRestObject>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
