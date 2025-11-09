import typia from "typia";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_ObjectGenericAlias = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "ObjectGenericAlias",
  })(
    typia.llm.parameters<ObjectGenericAliasParameters, "chatgpt">(),
  );

interface ObjectGenericAliasParameters {
  regular: ObjectGenericAlias;
  nullable: ObjectGenericAlias | null;
  optional: ObjectGenericAlias | undefined;
  faint: ObjectGenericAlias | null | undefined;
  array: Array<ObjectGenericAlias>;
}