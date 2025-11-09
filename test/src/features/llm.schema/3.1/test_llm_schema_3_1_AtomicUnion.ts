import typia from "typia";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_AtomicUnion = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "AtomicUnion",
  })(typia.llm.schema<AtomicUnion, "3.1">({}));