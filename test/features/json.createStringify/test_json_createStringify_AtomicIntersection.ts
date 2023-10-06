import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_createStringify_AtomicIntersection = _test_json_stringify(
    "AtomicIntersection",
)<AtomicIntersection>(
    AtomicIntersection
)(typia.json.createStringify<AtomicIntersection>());
