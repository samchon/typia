import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createValidateStringify_AtomicIntersection =
    _test_validateStringify(
        "AtomicIntersection",
        AtomicIntersection.generate,
        typia.createValidateStringify<AtomicIntersection>(),
        AtomicIntersection.SPOILERS,
    );
