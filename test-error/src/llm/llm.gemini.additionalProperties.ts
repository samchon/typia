import typia from "typia";

typia.llm.schema<
  {
    dictionary: Record<string, string>;
  },
  "gemini"
>();
typia.llm.parameters<
  {
    input: {
      dictionary: Record<string, string>;
    };
  },
  "gemini"
>();
typia.llm.application<
  {
    insert(props: {
      input: {
        dictionary: Record<string, string>;
      };
    }): void;
  },
  "gemini"
>();
