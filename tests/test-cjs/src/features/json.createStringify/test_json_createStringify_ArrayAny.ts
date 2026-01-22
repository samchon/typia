import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_createStringify_ArrayAny = (): void =>
  _test_json_stringify("ArrayAny")<ArrayAny>(ArrayAny)(
    typia.json.createStringify<ArrayAny>(),
  );
