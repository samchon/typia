import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_misc_validatePrune_ObjectUnionExplicitPointer =
    _test_misc_validatePrune(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
        typia.misc.validatePrune<ObjectUnionExplicitPointer>(input),
    );
