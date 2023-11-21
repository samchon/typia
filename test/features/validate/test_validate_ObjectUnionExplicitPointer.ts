import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_validate_ObjectUnionExplicitPointer = _test_validate(
  "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
  typia.validate<ObjectUnionExplicitPointer>(input),
);
