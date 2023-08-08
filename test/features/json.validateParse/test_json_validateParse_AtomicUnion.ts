import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_validateParse_AtomicUnion = _test_json_validateParse(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.json.validateParse<AtomicUnion>(input),
    AtomicUnion.SPOILERS,
);
