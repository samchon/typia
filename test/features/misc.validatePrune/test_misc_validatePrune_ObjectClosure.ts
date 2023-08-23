import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_misc_validatePrune_ObjectClosure = _test_misc_validatePrune(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input) =>
    typia.misc.validatePrune<ObjectClosure>(input),
);
