import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TagAtomicUnion = _test_assertEquals(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    TSON.createAssertEquals<TagAtomicUnion>(),
);