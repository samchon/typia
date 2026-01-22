import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_stringify_ArrayAtomicAlias = (): void =>
  _test_json_stringify("ArrayAtomicAlias")<ArrayAtomicAlias>(ArrayAtomicAlias)(
    (input) => typia.json.stringify<ArrayAtomicAlias>(input),
  );
