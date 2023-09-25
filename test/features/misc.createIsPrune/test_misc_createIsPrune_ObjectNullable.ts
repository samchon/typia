import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_createIsPrune_ObjectNullable = _test_misc_isPrune(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)(typia.misc.createIsPrune<ObjectNullable>());
