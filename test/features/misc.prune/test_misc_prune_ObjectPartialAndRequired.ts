import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_prune_ObjectPartialAndRequired = _test_misc_prune(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    typia.misc.prune<ObjectPartialAndRequired>(input),
);
