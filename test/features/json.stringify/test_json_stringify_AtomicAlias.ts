import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_stringify_AtomicAlias = _test_json_stringify(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.json.stringify(input),
);
