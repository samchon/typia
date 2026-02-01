import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_createValidateParse_AtomicSimple = (): void => _test_json_validateParse(
    "AtomicSimple",
)<AtomicSimple>(
    AtomicSimple
)(typia.json.createValidateParse<AtomicSimple>());
