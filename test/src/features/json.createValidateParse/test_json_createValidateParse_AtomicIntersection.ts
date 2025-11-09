import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_createValidateParse_AtomicIntersection = (): void => _test_json_validateParse(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)(typia.json.createValidateParse<AtomicIntersection>());
