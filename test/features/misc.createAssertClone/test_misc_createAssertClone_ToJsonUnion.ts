import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_misc_assertClone_ToJsonUnion = _test_misc_assertClone(
    "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)(typia.misc.createAssertClone<ToJsonUnion>());
