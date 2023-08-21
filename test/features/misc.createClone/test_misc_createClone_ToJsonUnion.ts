import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_misc_clone_ToJsonUnion = _test_misc_clone(
    "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)(typia.misc.createClone<ToJsonUnion>());
