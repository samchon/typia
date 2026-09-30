import typia from "typia";

// A defaulted whole-object argument permits omission just like a question token;
// LLM functions require a non-optional object parameter.
class DefaultParameter {
  execute(input: { value: number } = { value: 1 }): { value: number } {
    return input;
  }
}

typia.llm.application<DefaultParameter>();
