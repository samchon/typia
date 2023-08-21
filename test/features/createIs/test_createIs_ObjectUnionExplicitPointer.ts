import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_is_ObjectUnionExplicitPointer = _test_is(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
    typia.createIs<ObjectUnionExplicitPointer>(),
);
