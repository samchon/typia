import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_stringify_AtomicClass = (): void =>
  _test_json_stringify("AtomicClass")<AtomicClass>(AtomicClass)((input) =>
    typia.json.stringify<AtomicClass>(input),
  );
