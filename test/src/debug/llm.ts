import typia from "typia";

interface Application {
  /**
   * Something interesting.
   */
  something(): void;
}

typia.llm.applicationOfValidate<Application, "chatgpt">();
