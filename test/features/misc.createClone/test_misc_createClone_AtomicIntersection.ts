import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_createClone_AtomicIntersection = _test_misc_clone(
    "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)(
    typia.misc.createClone<AtomicIntersection>(),
);
