import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_createStringify_AtomicIntersection = (): void => _test_json_stringify(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)(typia.json.createStringify<AtomicIntersection>());
