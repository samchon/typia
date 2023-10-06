import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_createPrune_ObjectGenericAlias = _test_misc_prune(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)(typia.misc.createPrune<ObjectGenericAlias>());
