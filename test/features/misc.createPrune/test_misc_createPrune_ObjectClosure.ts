import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_misc_prune_ObjectClosure = _test_misc_prune(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)(typia.misc.createPrune<ObjectClosure>());
