import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_llm_response = (): void => {
  const result = LlmJson.parse('{"response": {"message": "Hello!", "suggestions": ["Ask a question", "Get help');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, {
    response: {
      message: "Hello!",
      suggestions: ["Ask a question", "Get help"],
    },
  });
};
