import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_prune_ObjectUnionImplicit =
    _test_misc_prune<ObjectUnionImplicit>(ObjectUnionImplicit)(
        typia.misc.createPrune<ObjectUnionImplicit>(),
    );
