import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_misc_assertPrune_ObjectClosure = _test_misc_assertPrune(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input) =>
    typia.misc.assertPrune<ObjectClosure>(input),
);
