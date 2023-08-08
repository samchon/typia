import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_isParse_AtomicClass = _test_json_isParse(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.json.isParse<AtomicClass>(input),
    AtomicClass.SPOILERS,
);
