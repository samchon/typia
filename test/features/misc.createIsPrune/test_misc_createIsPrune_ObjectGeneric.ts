import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_createIsPrune_ObjectGeneric = _test_misc_isPrune(
    "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)(typia.misc.createIsPrune<ObjectGeneric>());
