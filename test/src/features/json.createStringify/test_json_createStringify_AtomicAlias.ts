import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_createStringify_AtomicAlias = (): void =>
  _test_json_stringify("AtomicAlias")<AtomicAlias>(AtomicAlias)(
    typia.json.createStringify<AtomicAlias>(),
  );
