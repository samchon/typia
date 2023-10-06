import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_createPrune_ObjectGenericArray = _test_misc_prune(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)(typia.misc.createPrune<ObjectGenericArray>());
