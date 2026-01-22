import typia from "typia";

typia.llm.schema<
  {
    id?: string;
  },
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
  {
    strict: true;
  }
>();
typia.llm.application<
  {
    insert(props: {
      input: {
        etc?: boolean;
      };
    }): void;
  },
  {
    strict: true;
  }
>();
