import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_assertParse_AtomicUnion = _test_json_assertParse(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.json.assertParse<AtomicUnion>(input),
    AtomicUnion.SPOILERS,
);
