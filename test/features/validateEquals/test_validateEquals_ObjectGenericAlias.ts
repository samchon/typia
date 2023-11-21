import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_validateEquals_ObjectGenericAlias = _test_validateEquals(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
  typia.validateEquals<ObjectGenericAlias>(input),
);
