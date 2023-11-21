import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_is_TypeTagMatrix = _test_is("TypeTagMatrix")<TypeTagMatrix>(
  TypeTagMatrix,
)((input) => typia.is<TypeTagMatrix>(input));
