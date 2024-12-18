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

// APPLICATION-OF-VALIDATE
typia.llm.applicationOfValidate<
  {
    "0create"(p: {}): void;
  },
  "chatgpt"
>();
typia.llm.applicationOfValidate<
  {
    "a.b.c"(p: {}): void;
  },
  "chatgpt"
>();
typia.llm.applicationOfValidate<
  {
    "&x"(p: {}): void;
  },
  "chatgpt"
>();
