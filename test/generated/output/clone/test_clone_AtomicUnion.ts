import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_clone_AtomicUnion = _test_clone(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) =>
        ((
            input: Array<AtomicUnion.Union>,
        ): typia.Primitive<Array<AtomicUnion.Union>> => {
            return Array.isArray(input)
                ? (() => input.map((elem: any) => elem as any))()
                : (input as any);
        })(input),
);
