import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createAssertStringify_AtomicIntersection =
    _test_assertStringify(
        "AtomicIntersection",
        AtomicIntersection.generate,
        typia.createAssertStringify<AtomicIntersection>(),
        AtomicIntersection.SPOILERS,
    );
