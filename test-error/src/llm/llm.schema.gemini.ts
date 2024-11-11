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
    }
>();
typia.llm.schema<Array<string | number>>();
typia.llm.schema<Array<number> | Array<string>>();
typia.llm.schema<string & (tags.Format<"uri"> | tags.Format<"email">)>();
