import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_assertStringifyCustom_TupleRestObject = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "TupleRestObject",
  )<TupleRestObject>(TupleRestObject)((input) =>
    typia.json.assertStringify<TupleRestObject>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
