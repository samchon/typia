import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_validateStringify_AtomicIntersection =
    _test_validateStringify(
        "AtomicIntersection",
        AtomicIntersection.generate,
        (input) => typia.validateStringify(input),
        AtomicIntersection.SPOILERS,
    );
