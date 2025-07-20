import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_isParse_ArrayAtomicSimple = (): void =>
  _test_json_isParse("ArrayAtomicSimple")<ArrayAtomicSimple>(ArrayAtomicSimple)(
    (input) => typia.json.isParse<ArrayAtomicSimple>(input),
  );
