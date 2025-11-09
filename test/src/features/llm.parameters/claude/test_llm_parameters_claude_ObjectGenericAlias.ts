import typia from "typia";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ObjectGenericAlias = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ObjectGenericAlias",
  })(
    typia.llm.parameters<ObjectGenericAliasParameters, "claude">(),
  );

interface ObjectGenericAliasParameters {
  regular: ObjectGenericAlias;
  nullable: ObjectGenericAlias | null;
  optional: ObjectGenericAlias | undefined;
  faint: ObjectGenericAlias | null | undefined;
  array: Array<ObjectGenericAlias>;
}