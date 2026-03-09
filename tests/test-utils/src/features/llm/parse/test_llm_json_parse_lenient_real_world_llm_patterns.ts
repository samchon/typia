import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_real_world_llm_patterns =
  (): void => {
    // ChatGPT-style response with explanation before JSON
    const r1 = LlmJson.parse(
      "I'll help you with that. Here's the function call arguments:\n\n" +
        '{"location": "Seoul, Korea", "unit": "celsius"}',
    );
    TestValidator.equals("chatgpt-prefix-success", r1.success, true);
    if (r1.success)
      TestValidator.equals("chatgpt-prefix-data", r1.data, {
        location: "Seoul, Korea",
        unit: "celsius",
      });

    // Claude-style with thinking and JSON
    const r2 = LlmJson.parse(
      "Let me think about this... The best parameters would be:\n\n" +
        '```json\n{"query": "machine learning", "limit": 10, "offset": 0}\n```\n\n' +
        "This should give you good results.",
    );
    TestValidator.equals("claude-thinking-success", r2.success, true);
    if (r2.success)
      TestValidator.equals("claude-thinking-data", r2.data, {
        query: "machine learning",
        limit: 10,
        offset: 0,
      });

    // Streaming incomplete with nested structure
    const r3 = LlmJson.parse(
      '{"action": "search", "params": {"q": "hello world", "filters": {"date_from": "2024-01-01", "date_to": "2024-12',
    );
    TestValidator.equals("streaming-nested-success", r3.success, true);
    if (r3.success)
      TestValidator.equals("streaming-nested-data", r3.data, {
        action: "search",
        params: {
          q: "hello world",
          filters: {
            date_from: "2024-01-01",
            date_to: "2024-12",
          },
        },
      });

    // Tool use response with array of actions
    const r4 = LlmJson.parse(
      '{"tools": [{"name": "calculator", "input": {"expression": "2 + 2"}}, {"name": "web_search", "input": {"query": "weather today"',
    );
    TestValidator.equals("tool-use-success", r4.success, true);
    if (r4.success)
      TestValidator.equals("tool-use-data", r4.data, {
        tools: [
          { name: "calculator", input: { expression: "2 + 2" } },
          { name: "web_search", input: { query: "weather today" } },
        ],
      });

    // JSON with escaped content (LLM generating code)
    const r5 = LlmJson.parse(
      '{"code": "function hello() {\\n  console.log(\\"Hello, World!\\");\\n}", "language": "javascript"}',
    );
    TestValidator.equals("code-content-success", r5.success, true);
    if (r5.success)
      TestValidator.equals("code-content-data", r5.data, {
        code: 'function hello() {\n  console.log("Hello, World!");\n}',
        language: "javascript",
      });

    // Multi-turn conversation context
    const r6 = LlmJson.parse(
      '{"messages": [{"role": "user", "content": "What is 2+2?"}, {"role": "assistant", "content": "The answer is 4."}], "model": "gpt-4"}',
    );
    TestValidator.equals("multi-turn-success", r6.success, true);
    if (r6.success)
      TestValidator.equals("multi-turn-data", r6.data, {
        messages: [
          { role: "user", content: "What is 2+2?" },
          { role: "assistant", content: "The answer is 4." },
        ],
        model: "gpt-4",
      });

    // OpenAI function calling format streaming
    const r7 = LlmJson.parse(
      '{"name": "get_current_weather", "arguments": "{\\"location\\": \\"San Francisco, CA\\", \\"unit\\": \\"fahrenheit\\"}"}',
    );
    TestValidator.equals("openai-fc-success", r7.success, true);
    if (r7.success)
      TestValidator.equals("openai-fc-data", r7.data, {
        name: "get_current_weather",
        arguments:
          '{"location": "San Francisco, CA", "unit": "fahrenheit"}',
      });

    // Response with special characters in values
    const r8 = LlmJson.parse(
      '{"emoji": "\\uD83D\\uDE00", "url": "https://example.com/path?q=hello&lang=ko", "html": "<b>bold</b>"}',
    );
    TestValidator.equals("special-values-success", r8.success, true);
    if (r8.success)
      TestValidator.equals("special-values-data", r8.data, {
        emoji: "😀",
        url: "https://example.com/path?q=hello&lang=ko",
        html: "<b>bold</b>",
      });

    // LLM sometimes uses JS-style comments in JSON
    const r9 = LlmJson.parse(
      '{\n  // API configuration\n  "endpoint": "https://api.example.com",\n  "timeout": 30000, // milliseconds\n  "retries": 3\n}',
    );
    TestValidator.equals("js-comments-success", r9.success, true);
    if (r9.success)
      TestValidator.equals("js-comments-data", r9.data, {
        endpoint: "https://api.example.com",
        timeout: 30000,
        retries: 3,
      });

    // LLM outputs trailing comma (common mistake)
    const r10 = LlmJson.parse(
      '{\n  "items": [\n    "apple",\n    "banana",\n    "cherry",\n  ],\n  "count": 3,\n}',
    );
    TestValidator.equals("trailing-commas-success", r10.success, true);
    if (r10.success)
      TestValidator.equals("trailing-commas-data", r10.data, {
        items: ["apple", "banana", "cherry"],
        count: 3,
      });
  };
