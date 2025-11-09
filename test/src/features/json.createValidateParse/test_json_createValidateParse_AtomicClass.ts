import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_createValidateParse_AtomicClass = (): void =>
  _test_json_validateParse("AtomicClass")<AtomicClass>(AtomicClass)(
    typia.json.createValidateParse<AtomicClass>(),
  );
