import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_isPrune_ObjectGeneric =
    _test_misc_isPrune<ObjectGeneric>(ObjectGeneric)((input) =>
        typia.misc.isPrune(input),
    );
