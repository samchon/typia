import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_isStringify_AtomicUnion = _test_json_isStringify(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) =>
  typia.json.isStringify<AtomicUnion>(input),
);
