import typia from "typia";

typia.llm.schema<bigint, "chatgpt">({});
typia.llm.schema<[number, string], "claude">({});
