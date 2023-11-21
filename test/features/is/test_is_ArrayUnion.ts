import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_is_ArrayUnion = _test_is("ArrayUnion")<ArrayUnion>(
  ArrayUnion,
)((input) => typia.is<ArrayUnion>(input));
