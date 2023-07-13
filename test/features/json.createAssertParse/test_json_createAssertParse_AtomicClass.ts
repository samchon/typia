import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_assertParse_AtomicClass = _test_json_assertParse(
    "AtomicClass",
    AtomicClass.generate,
    typia.json.createAssertParse<AtomicClass>(),
    AtomicClass.SPOILERS,
);
