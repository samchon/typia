import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_isPrune_ObjectUnionExplicit =
    _test_misc_isPrune<ObjectUnionExplicit>(ObjectUnionExplicit)(
        typia.misc.createIsPrune<ObjectUnionExplicit>(),
    );
