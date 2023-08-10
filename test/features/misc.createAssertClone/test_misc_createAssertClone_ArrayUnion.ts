import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_assertClone_ArrayUnion =
    _test_misc_assertClone<ArrayUnion>(ArrayUnion)(
        typia.misc.createAssertClone<ArrayUnion>(),
    );
