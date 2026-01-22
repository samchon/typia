import {
  ILlmApplication,
  ILlmFunction,
  LlmTypeChecker,
} from "@samchon/openapi";
import typia, { tags } from "typia";

export const test_llm_application_separate = (): void => {
  const app: ILlmApplication<IMembership> = typia.llm.application<IMembership>({
    separate: (schema) => LlmTypeChecker.isInteger(schema),
  });
  const func: ILlmFunction = app.functions[0]!;
  if (!func.separated?.validate)
    throw new Error("Separated validate function is not defined.");
};

interface IMembership {
  information(member: IMember): void;
}

interface IMember {
  name: string;
  age: number & tags.Type<"uint32">;
}
