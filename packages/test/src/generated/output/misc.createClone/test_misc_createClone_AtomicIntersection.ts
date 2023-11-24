import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_misc_createClone_AtomicIntersection = _test_misc_clone(
  "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)(
  (input: AtomicIntersection): typia.Resolved<AtomicIntersection> => {
    return Array.isArray(input) &&
      input.length === 3 &&
      "boolean" === typeof input[0] &&
      "number" === typeof input[1] &&
      "string" === typeof input[2]
      ? ([input[0] as any, input[1] as any, input[2] as any] as any)
      : (input as any);
  },
);
