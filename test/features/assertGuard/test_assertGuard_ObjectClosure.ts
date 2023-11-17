import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_assertGuard_ObjectClosure = _test_assertGuard(
  "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input) =>
  typia.assertGuard<ObjectClosure>(input),
);
