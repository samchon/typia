import typia from "typia";

// APPLICATION FUNCTION
typia.llm.application<
  {
    "0create"(p: {}): void;
  },
  "chatgpt"
>();
typia.llm.application<
  {
    "a.b.c"(p: {}): void;
  },
  "chatgpt"
>();
typia.llm.application<
  {
    "&x"(p: {}): void;
  },
  "chatgpt"
>();
