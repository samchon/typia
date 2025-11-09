import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_createIsParse_AtomicUnion = (): void =>
  _test_json_isParse("AtomicUnion")<AtomicUnion>(AtomicUnion)(
    typia.json.createIsParse<AtomicUnion>(),
  );
