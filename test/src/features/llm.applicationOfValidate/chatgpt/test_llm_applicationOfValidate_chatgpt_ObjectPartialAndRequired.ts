import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_llm_applicationOfValidate_chatgpt_ObjectPartialAndRequired =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ObjectPartialAndRequired",
    factory: ObjectPartialAndRequired,
  })(
    typia.llm.applicationOfValidate<
      ObjectPartialAndRequiredApplication,
      "chatgpt"
    >(),
  );

interface ObjectPartialAndRequiredApplication {
  insert(p: { first: ObjectPartialAndRequired }): Promise<void>;
  reduce(p: {
    first: ObjectPartialAndRequired;
    second: ObjectPartialAndRequired | null;
  }): Promise<ObjectPartialAndRequired>;
  coalesce(p: {
    first: ObjectPartialAndRequired | null;
    second: ObjectPartialAndRequired | null;
    third?: ObjectPartialAndRequired | null;
  }): Promise<ObjectPartialAndRequired | null>;
}
