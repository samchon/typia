import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_validate_ObjectGenericAlias = _test_validate(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
  typia.validate<ObjectGenericAlias>(input),
);
