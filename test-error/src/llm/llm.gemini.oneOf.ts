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
    inser(props: {
      input: {
        dictionary: string | number;
      };
    }): void;
  },
  "gemini"
>();
