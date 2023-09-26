import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_misc_createIsPrune_ObjectUnionExplicitPointer =
    _test_misc_isPrune(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
        typia.misc.createIsPrune<ObjectUnionExplicitPointer>(),
    );
