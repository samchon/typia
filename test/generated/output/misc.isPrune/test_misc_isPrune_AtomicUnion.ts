import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_misc_isPrune_AtomicUnion = _test_misc_isPrune(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) =>
        ((input: any): input is Array<AtomicUnion.Union> => {
            const is = (input: any): input is Array<AtomicUnion.Union> => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            null === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            "boolean" === typeof elem,
                    )
                );
            };
            const prune = (input: Array<AtomicUnion.Union>): void => {};
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    AtomicUnion.SPOILERS,
);
