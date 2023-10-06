import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_isClone_AtomicIntersection = _test_misc_isClone(
    "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)((input) =>
    typia.misc.isClone<AtomicIntersection>(input),
);
