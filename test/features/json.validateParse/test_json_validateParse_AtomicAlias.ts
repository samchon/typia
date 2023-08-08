import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_validateParse_AtomicAlias = _test_json_validateParse(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.json.validateParse<AtomicAlias>(input),
    AtomicAlias.SPOILERS,
);
