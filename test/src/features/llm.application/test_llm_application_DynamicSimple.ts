import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_llm_application_DynamicSimple = (): void =>
  _test_llm_application({
    name: "DynamicSimple",
    factory: DynamicSimple,
  })(typia.llm.application<DynamicSimpleApplication>());

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
