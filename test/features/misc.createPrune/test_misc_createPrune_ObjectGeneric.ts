import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_createPrune_ObjectGeneric = _test_misc_prune(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)(typia.misc.createPrune<ObjectGeneric>());
