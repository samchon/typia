import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_assertGuard_ClassClosure = _test_assertGuard(
  "ClassClosure",
)<ClassClosure>(ClassClosure)((input) =>
  typia.assertGuard<ClassClosure>(input),
);
