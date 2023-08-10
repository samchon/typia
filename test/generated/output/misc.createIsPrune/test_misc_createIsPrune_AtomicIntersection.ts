import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_misc_isPrune_AtomicIntersection =
    _test_misc_isPrune<AtomicIntersection>(AtomicIntersection)(
        (input: any): input is AtomicIntersection => {
            const is = (input: any): input is AtomicIntersection => {
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    "string" === typeof input[2]
                );
            };
            const prune = (input: AtomicIntersection): void => {};
            if (!is(input)) return false;
            prune(input);
            return true;
        },
    );
