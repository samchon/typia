import typia from "typia";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ObjectPartialAndRequired = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectPartialAndRequired",
    factory: ObjectPartialAndRequired
  })(
    typia.llm.application<ObjectPartialAndRequiredApplication, "chatgpt">(),
  );

interface ObjectPartialAndRequiredApplication {
  insert(p: { first: ObjectPartialAndRequired }): Promise<void>;
  reduce(p: { first: ObjectPartialAndRequired, second: ObjectPartialAndRequired | null }): Promise<ObjectPartialAndRequired>;
  coalesce(p: {
    first: ObjectPartialAndRequired | null,
    second: ObjectPartialAndRequired | null,
    third?: ObjectPartialAndRequired | null,
  }): Promise<ObjectPartialAndRequired | null>;
}