import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_createIsStringify_AtomicUnion = (): void =>
  _test_json_isStringify("AtomicUnion")<AtomicUnion>(AtomicUnion)(
    typia.json.createIsStringify<AtomicUnion>(),
  );
