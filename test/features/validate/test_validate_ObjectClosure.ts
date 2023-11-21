import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_validate_ObjectClosure = _test_validate(
  "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input) =>
  typia.validate<ObjectClosure>(input),
);
