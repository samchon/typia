import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_createStringify_AtomicClass = (): void => _test_json_stringify(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)(typia.json.createStringify<AtomicClass>());
