import typia from "typia";

typia.llm.schema<
  {
    dictionary: Record<string, string>;
  },
  "chatgpt",
  {
    strict: true;
  }
>({});
typia.llm.parameters<
  {
    input: {
      dictionary: Record<string, string>;
    };
  },
  "chatgpt",
  {
    strict: true;
  }
>();
typia.llm.application<
  {
    inser(props: {
      input: {
        dictionary: Record<string, string>;
      };
    }): void;
  },
  "chatgpt",
  {
    strict: true;
  }
>();
