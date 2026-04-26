import typia from "typia";

typia.json.createStringify<{
  value: bigint;
}>();

typia.llm.parameters<
  | {
      alpha: string;
    }
  | {
      beta: number;
    }
>();

typia.llm.parameters<
  Record<string, string>,
  {
    strict: true;
  }
>();

typia.llm.application<{
  numeric(value: number): void;
}>();
