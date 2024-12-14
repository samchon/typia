import typia from "typia";

typia.llm.schema<
  {
    id?: string;
  },
  "chatgpt",
  {
    strict: true;
  }
>({});
typia.llm.parameters<
  {
    input: {
      age?: number;
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
        etc?: boolean;
      };
    }): void;
  },
  "chatgpt",
  {
    strict: true;
  }
>();
