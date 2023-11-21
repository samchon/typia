import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_validateEquals_ArrayUnion = _test_validateEquals(
  "ArrayUnion",
)<ArrayUnion>(ArrayUnion)((input) => typia.validateEquals<ArrayUnion>(input));
