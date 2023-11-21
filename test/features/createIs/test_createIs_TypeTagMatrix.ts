import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_createIs_TypeTagMatrix = _test_is(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)(typia.createIs<TypeTagMatrix>());
