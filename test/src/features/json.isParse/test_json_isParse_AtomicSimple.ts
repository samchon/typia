import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_isParse_AtomicSimple = (): void => _test_json_isParse(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)((input) => typia.json.isParse<AtomicSimple>(input));
