import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_createAssertParseCustom_TupleRestObject = (): void =>
  _test_json_assertParse(CustomGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )(
    typia.json.createAssertParse<TupleRestObject>(
      (p) => new CustomGuardError(p),
    ),
  );
