import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_misc_assertClone_ObjectUnionExplicitPointer =
    _test_misc_assertClone(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
        typia.misc.createAssertClone<ObjectUnionExplicitPointer>(),
    );
