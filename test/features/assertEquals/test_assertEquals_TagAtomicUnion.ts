import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_assertEquals_TagAtomicUnion = _test_assertEquals(
    "TagAtomicUnion",
)<TagAtomicUnion>(TagAtomicUnion)((input) =>
    typia.assertEquals<TagAtomicUnion>(input),
);
