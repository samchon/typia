import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_createIsStringify_ArrayUnion = (): void =>
  _test_json_isStringify("ArrayUnion")<ArrayUnion>(ArrayUnion)(
    typia.json.createIsStringify<ArrayUnion>(),
  );
