import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_validateParse_AtomicIntersection = (): void => _test_json_validateParse(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)((input) => typia.json.validateParse<AtomicIntersection>(input));
