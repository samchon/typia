import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_llm_applicationOfValidate_chatgpt_DynamicSimple =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "DynamicSimple",
    factory: DynamicSimple,
  })(typia.llm.applicationOfValidate<DynamicSimpleApplication, "chatgpt">());

interface DynamicSimpleApplication {
  insert(p: { first: DynamicSimple }): Promise<void>;
  reduce(p: {
    first: DynamicSimple;
    second: DynamicSimple | null;
  }): Promise<DynamicSimple>;
  coalesce(p: {
    first: DynamicSimple | null;
    second: DynamicSimple | null;
    third?: DynamicSimple | null;
  }): Promise<DynamicSimple | null>;
}
