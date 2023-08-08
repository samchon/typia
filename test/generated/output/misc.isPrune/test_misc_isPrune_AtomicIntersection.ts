import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_misc_isPrune_AtomicIntersection = _test_misc_isPrune(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) =>
        ((
            input: any,
        ): input is [
            AtomicIntersection.Wrapper<boolean>,
            AtomicIntersection.Wrapper<number>,
            AtomicIntersection.Wrapper<string>,
        ] => {
            const is = (
                input: any,
            ): input is [
                AtomicIntersection.Wrapper<boolean>,
                AtomicIntersection.Wrapper<number>,
                AtomicIntersection.Wrapper<string>,
            ] => {
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    "string" === typeof input[2]
                );
            };
            const prune = (
                input: [
                    AtomicIntersection.Wrapper<boolean>,
                    AtomicIntersection.Wrapper<number>,
                    AtomicIntersection.Wrapper<string>,
                ],
            ): void => {};
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    AtomicIntersection.SPOILERS,
);
