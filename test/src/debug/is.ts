import typia from "typia";

import { CommentTagFormat } from "../structures/CommentTagFormat";

const is = typia.createIs<CommentTagFormat>();
console.log(is(CommentTagFormat.generate()));

for (const spoiler of CommentTagFormat.SPOILERS) {
  const value: CommentTagFormat = CommentTagFormat.generate();
  spoiler(value);
  console.log(is(value));
}
