import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_isClone_ObjectUnionCompositePointer =
    _test_misc_isClone<ObjectUnionCompositePointer>(
        ObjectUnionCompositePointer,
    )((input) => typia.misc.isClone<ObjectUnionCompositePointer>(input));
