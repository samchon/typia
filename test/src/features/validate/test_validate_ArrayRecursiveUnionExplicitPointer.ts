import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_validate_ArrayRecursiveUnionExplicitPointer = (): void =>
  _test_validate(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    (input) => typia.validate<ArrayRecursiveUnionExplicitPointer>(input),
  );
