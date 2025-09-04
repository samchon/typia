import typia from "typia";

typia.llm.schema<
  {
    dictionary: string | number;
  },
  "gemini"
>();
typia.llm.parameters<
  {
    input: {
      dictionary: string | number;
    };
  },
  "gemini"
>();
typia.llm.application<
  {
    insert(props: {
      input: {
        dictionary: string | number;
      };
    }): void;
  },
  "gemini"
>();
