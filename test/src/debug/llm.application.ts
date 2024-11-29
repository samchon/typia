import typia from "typia";

import { ToJsonNull } from "../structures/ToJsonNull";

typia.llm.application<ToJsonNullApplication, "gemini">();

interface ToJsonNullApplication {
  insert(p: { first: ToJsonNull }): Promise<void>;
  reduce(p: {
    first: ToJsonNull;
    second: ToJsonNull | null;
  }): Promise<ToJsonNull>;
  coalesce(p: {
    first: ToJsonNull | null;
    second: ToJsonNull | null;
    third?: ToJsonNull | null;
  }): Promise<void>;
}
