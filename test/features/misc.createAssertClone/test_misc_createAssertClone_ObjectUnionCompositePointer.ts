import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_assertClone_ObjectUnionCompositePointer =
    _test_misc_assertClone<ObjectUnionCompositePointer>(
        ObjectUnionCompositePointer,
    )(typia.misc.createAssertClone<ObjectUnionCompositePointer>());
