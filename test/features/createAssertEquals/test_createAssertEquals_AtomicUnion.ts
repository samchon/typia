import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_assertEquals_AtomicUnion = _test_assertEquals(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createAssertEquals<AtomicUnion>(),
);
