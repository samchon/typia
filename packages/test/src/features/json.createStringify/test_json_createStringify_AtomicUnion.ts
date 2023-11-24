import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_createStringify_AtomicUnion = _test_json_stringify(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)(typia.json.createStringify<AtomicUnion>());
