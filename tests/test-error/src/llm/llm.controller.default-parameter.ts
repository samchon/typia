import typia from "typia";

// The controller shares the application's required whole-object policy.
class DefaultParameter {
  execute(input: { value: number } = { value: 1 }): { value: number } {
    return input;
  }
}

typia.llm.controller<DefaultParameter>("defaults", new DefaultParameter());
