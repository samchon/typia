import typia, { tags } from "typia";

typia.llm.schema<number | string, "gemini">();
typia.llm.schema<
  | {
      type: "animal";
      legs: number;
    }
  | {
      type: "plant";
      leaves: number;
    },
  "gemini"
>();
typia.llm.schema<Array<string | number>, "gemini">();
typia.llm.schema<Array<number> | Array<string>, "gemini">();
typia.llm.schema<
  string & (tags.Format<"uri"> | tags.Format<"email">),
  "gemini"
>();
