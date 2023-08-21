import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_misc_clone_ObjectUnionExplicitPointer = _test_misc_clone(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
    typia.misc.createClone<ObjectUnionExplicitPointer>(),
);
