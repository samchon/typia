import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_createValidateStringify_AtomicClass = (): void =>
  _test_json_validateStringify("AtomicClass")<AtomicClass>(AtomicClass)(
    typia.json.createValidateStringify<AtomicClass>(),
  );
