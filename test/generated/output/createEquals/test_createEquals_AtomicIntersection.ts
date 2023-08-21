import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_equals_AtomicIntersection = _test_equals(
    "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)(
    (
        input: any,
        _exceptionable: boolean = true,
    ): input is AtomicIntersection => {
        return (
            Array.isArray(input) &&
            input.length === 3 &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            "string" === typeof input[2]
        );
    },
);
