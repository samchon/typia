import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_assertStringifyCustom_TupleRestArray = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "TupleRestArray",
  )<TupleRestArray>(TupleRestArray)((input) =>
    typia.json.assertStringify<TupleRestArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
