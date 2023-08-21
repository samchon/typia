import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_assertEquals_AtomicIntersection = _test_assertEquals(
    "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)((input) =>
    typia.assertEquals<AtomicIntersection>(input),
);
