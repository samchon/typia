import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_isParse_AtomicSimple = _test_json_isParse(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.json.isParse<AtomicSimple>(input),
    AtomicSimple.SPOILERS,
);
