import typia from "typia";

typia.llm.schema<
  {
    dynamic: Record<string, string>;
  },
  "chatgpt"
>();

typia.llm.schema<
  {
    dynamic: Record<string, string>;
  },
  "claude"
>();

typia.llm.schema<
  {
    dynamic: Record<string, string>;
  },
  "gemini"
>();

typia.llm.schema<
  {
    dynamic: Record<string, string>;
  },
  "3.1"
>();

typia.llm.schema<
  {
    dynamic: Record<string, string>;
  },
  "3.0"
>({});
