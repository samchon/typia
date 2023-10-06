import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_equals_ObjectUnionExplicitPointer = _test_equals(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
    typia.equals<ObjectUnionExplicitPointer>(input),
);
