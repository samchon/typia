import typia from "typia";

// APPLICATION FUNCTION
typia.llm.application<{
  "0create"(p: {}): void;
}>();
typia.llm.application<{
  "a.b.c"(p: {}): void;
}>();
typia.llm.application<{
  "&x"(p: {}): void;
}>();
