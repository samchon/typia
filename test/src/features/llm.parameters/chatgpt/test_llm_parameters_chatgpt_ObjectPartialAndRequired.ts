import typia from "typia";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_ObjectPartialAndRequired = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "ObjectPartialAndRequired",
  })(
    typia.llm.parameters<ObjectPartialAndRequiredParameters, "chatgpt">(),
  );

interface ObjectPartialAndRequiredParameters {
  regular: ObjectPartialAndRequired;
  nullable: ObjectPartialAndRequired | null;
  optional: ObjectPartialAndRequired | undefined;
  faint: ObjectPartialAndRequired | null | undefined;
  array: Array<ObjectPartialAndRequired>;
}