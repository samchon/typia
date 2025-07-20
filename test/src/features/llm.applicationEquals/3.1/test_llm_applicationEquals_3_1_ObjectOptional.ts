import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_llm_applicationEquals_3_1_ObjectOptional = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "ObjectOptional",
    factory: ObjectOptional,
  })(
    typia.llm.application<ObjectOptionalApplication, "3.1", { equal: true }>(),
  );

interface ObjectOptionalApplication {
  insert(p: { first: ObjectOptional }): Promise<void>;
  reduce(p: {
    first: ObjectOptional;
    second: ObjectOptional | null;
  }): Promise<ObjectOptional>;
  coalesce(p: {
    first: ObjectOptional | null;
    second: ObjectOptional | null;
    third?: ObjectOptional | null;
  }): Promise<ObjectOptional | null>;
}
