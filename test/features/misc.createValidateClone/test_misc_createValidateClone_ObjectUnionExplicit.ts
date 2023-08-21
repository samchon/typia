import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_validateClone_ObjectUnionExplicit =
    _test_misc_validateClone("ObjectUnionExplicit")<ObjectUnionExplicit>(
        ObjectUnionExplicit,
    )(typia.misc.createValidateClone<ObjectUnionExplicit>());
