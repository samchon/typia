import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_validateClone_ObjectUnionImplicit =
    _test_misc_validateClone(
        "ObjectUnionImplicit",
        ObjectUnionImplicit.generate,
        (input) => typia.misc.validateClone(input),
        ObjectUnionImplicit.SPOILERS,
    );
