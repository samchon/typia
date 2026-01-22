import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_isStringify_AtomicClass = (): void =>
  _test_json_isStringify("AtomicClass")<AtomicClass>(AtomicClass)((input) =>
    typia.json.isStringify<AtomicClass>(input),
  );
