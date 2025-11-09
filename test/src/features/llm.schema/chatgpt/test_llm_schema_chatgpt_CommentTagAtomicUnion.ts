import typia from "typia";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_CommentTagAtomicUnion = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "CommentTagAtomicUnion",
  })(typia.llm.schema<CommentTagAtomicUnion, "chatgpt">({}));