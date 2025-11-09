import typia from "typia";
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_DynamicSimple = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "DynamicSimple",
    factory: DynamicSimple
  })(
    typia.llm.application<DynamicSimpleApplication, "3.0">(),
  );

interface DynamicSimpleApplication {
  insert(p: { first: DynamicSimple }): Promise<void>;
  reduce(p: { first: DynamicSimple, second: DynamicSimple | null }): Promise<DynamicSimple>;
  coalesce(p: {
    first: DynamicSimple | null,
    second: DynamicSimple | null,
    third?: DynamicSimple | null,
  }): Promise<DynamicSimple | null>;
}