import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_isPrune_ObjectPartial = _test_misc_isPrune(
    "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) =>
    typia.misc.isPrune<ObjectPartial>(input),
);
