import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_createIsParse_AtomicSimple = _test_json_isParse(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)(typia.json.createIsParse<AtomicSimple>());
