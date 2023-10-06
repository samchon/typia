import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_misc_createValidateClone_ObjectUnionExplicitPointer =
    _test_misc_validateClone(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
        typia.misc.createValidateClone<ObjectUnionExplicitPointer>(),
    );
