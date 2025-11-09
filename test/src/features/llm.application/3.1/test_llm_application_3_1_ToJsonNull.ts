import typia from "typia";
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_ToJsonNull = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "ToJsonNull",
    factory: ToJsonNull
  })(
    typia.llm.application<ToJsonNullApplication, "3.1">(),
  );

interface ToJsonNullApplication {
  insert(p: { first: ToJsonNull }): Promise<void>;
  reduce(p: { first: ToJsonNull, second: ToJsonNull | null }): Promise<ToJsonNull>;
  coalesce(p: {
    first: ToJsonNull | null,
    second: ToJsonNull | null,
    third?: ToJsonNull | null,
  }): Promise<ToJsonNull | null>;
}