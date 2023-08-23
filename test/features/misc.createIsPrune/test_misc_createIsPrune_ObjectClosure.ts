import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_misc_isPrune_ObjectClosure = _test_misc_isPrune(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)(typia.misc.createIsPrune<ObjectClosure>());
