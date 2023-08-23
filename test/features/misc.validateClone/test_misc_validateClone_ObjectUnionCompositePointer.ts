import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_validateClone_ObjectUnionCompositePointer =
    _test_misc_validateClone(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
        typia.misc.validateClone<ObjectUnionCompositePointer>(input),
    );
