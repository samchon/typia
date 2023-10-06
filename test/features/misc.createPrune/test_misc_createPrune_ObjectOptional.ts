import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_createPrune_ObjectOptional = _test_misc_prune(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)(typia.misc.createPrune<ObjectOptional>());
