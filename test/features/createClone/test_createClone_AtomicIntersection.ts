import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createClone_AtomicIntersection = _test_clone(
    "AtomicIntersection",
    AtomicIntersection.generate,
    typia.createClone<AtomicIntersection>(),
);
