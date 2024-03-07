import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_TupleRestArray =
  _test_json_assertStringify(CustomGuardError)(
    "TupleRestArray",
  )<TupleRestArray>(TupleRestArray)((input) =>
    typia.json.assertStringify<TupleRestArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
