import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_assertGuardEquals_ObjectClosure = _test_assertGuardEquals(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input) =>
    typia.assertGuardEquals<ObjectClosure>(input),
);
