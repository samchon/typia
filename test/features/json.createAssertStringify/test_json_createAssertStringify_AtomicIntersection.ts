import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_createAssertStringify_AtomicIntersection =
    _test_json_assertStringify("AtomicIntersection")<AtomicIntersection>(
        AtomicIntersection,
    )(typia.json.createAssertStringify<AtomicIntersection>());
