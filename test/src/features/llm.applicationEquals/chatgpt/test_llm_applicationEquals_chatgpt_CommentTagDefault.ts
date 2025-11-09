import typia from "typia";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_chatgpt_CommentTagDefault = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "CommentTagDefault",
    factory: CommentTagDefault
  })(
    typia.llm.application<CommentTagDefaultApplication, "chatgpt", { equals: true }>(),
  );

interface CommentTagDefaultApplication {
  insert(p: { first: CommentTagDefault }): Promise<void>;
  reduce(p: { first: CommentTagDefault, second: CommentTagDefault | null }): Promise<CommentTagDefault>;
  coalesce(p: {
    first: CommentTagDefault | null,
    second: CommentTagDefault | null,
    third?: CommentTagDefault | null,
  }): Promise<CommentTagDefault | null>;
}