import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_assertParseCustom_TupleRestObject = (): void =>
  _test_json_assertParse(CustomGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )((input) =>
    typia.json.assertParse<TupleRestObject>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
