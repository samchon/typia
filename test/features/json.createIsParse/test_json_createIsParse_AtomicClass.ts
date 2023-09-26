import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_createIsParse_AtomicClass = _test_json_isParse(
    "AtomicClass",
)<AtomicClass>(AtomicClass)(typia.json.createIsParse<AtomicClass>());
