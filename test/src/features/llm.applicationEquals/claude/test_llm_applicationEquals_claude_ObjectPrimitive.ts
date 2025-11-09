import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_llm_applicationEquals_claude_ObjectPrimitive = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ObjectPrimitive",
    factory: ObjectPrimitive,
  })(
    typia.llm.application<
      ObjectPrimitiveApplication,
      "claude",
      { equals: true }
    >(),
  );

interface ObjectPrimitiveApplication {
  insert(p: { first: ObjectPrimitive }): Promise<void>;
  reduce(p: {
    first: ObjectPrimitive;
    second: ObjectPrimitive | null;
  }): Promise<ObjectPrimitive>;
  coalesce(p: {
    first: ObjectPrimitive | null;
    second: ObjectPrimitive | null;
    third?: ObjectPrimitive | null;
  }): Promise<ObjectPrimitive | null>;
}
