import typia, { tags } from "typia";
import { v4 } from "uuid";

const input: unknown = {
  id: v4(),
  email: "samchon.github@gmail.com",
  age: 30,
};
if (typia.is<IMember>(input)) {
  // auto type casting
  console.log(input.id, input.email, input.age);
}

interface IMember {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;
}
