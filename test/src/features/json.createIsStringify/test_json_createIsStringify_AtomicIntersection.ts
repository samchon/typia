import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_createIsStringify_AtomicIntersection = (): void => _test_json_isStringify(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)(typia.json.createIsStringify<AtomicIntersection>());
