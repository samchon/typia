import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_stringify_AtomicSimple = _test_json_stringify(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)((input) => typia.json.stringify<AtomicSimple>(input));
