import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_llm_application_chatgpt_ObjectSimple =
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ObjectSimple",
    factory: ObjectSimple,
  })(
    typia.llm.application<
      ObjectSimpleApplication,
      "chatgpt",
      { equal: true }
    >(),
  );

interface ObjectSimpleApplication {
  insert(p: { first: ObjectSimple }): Promise<void>;
  reduce(p: {
    first: ObjectSimple;
    second: ObjectSimple | null;
  }): Promise<ObjectSimple>;
  coalesce(p: {
    first: ObjectSimple | null;
    second: ObjectSimple | null;
    third?: ObjectSimple | null;
  }): Promise<ObjectSimple | null>;
}
