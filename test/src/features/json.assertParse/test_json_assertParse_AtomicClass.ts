import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicClass } from "../../structures/AtomicClass";

import { TypeGuardError } from "typia";

export const test_json_assertParse_AtomicClass = (): void => _test_json_assertParse(TypeGuardError)(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)((input) => typia.json.assertParse<AtomicClass>(input));
