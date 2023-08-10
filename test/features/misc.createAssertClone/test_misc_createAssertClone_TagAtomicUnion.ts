import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_misc_assertClone_TagAtomicUnion =
    _test_misc_assertClone<TagAtomicUnion>(TagAtomicUnion)(
        typia.misc.createAssertClone<TagAtomicUnion>(),
    );
