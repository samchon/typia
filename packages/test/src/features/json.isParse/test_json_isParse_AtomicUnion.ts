import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_isParse_AtomicUnion = _test_json_isParse(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) => typia.json.isParse<AtomicUnion>(input));
