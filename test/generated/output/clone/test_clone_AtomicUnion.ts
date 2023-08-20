import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_clone_AtomicUnion = _test_clone(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) =>
        ((input: AtomicUnion): typia.Primitive<AtomicUnion> => {
            const $cp0 = (input: any) => input.map((elem: any) => elem as any);
            return Array.isArray(input) ? $cp0(input) : (input as any);
        })(input),
);
