import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_createValidateEquals_ObjectClosure = _test_validateEquals(
  "ObjectClosure",
)<ObjectClosure>(ObjectClosure)(typia.createValidateEquals<ObjectClosure>());
