import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_createIsPrune_TypeTagMatrix = _test_misc_isPrune(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)(typia.misc.createIsPrune<TypeTagMatrix>());
