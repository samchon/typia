import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_createIs_AtomicIntersection = _test_is(
    "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)(
    (input: any): input is AtomicIntersection => {
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
