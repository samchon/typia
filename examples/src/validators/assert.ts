import typia, { tags } from "typia";
import { v4 } from "uuid";

typia.assert<IMember>({
  id: v4(),
  email: "samchon.github@gmail.com",
  age: 18, // wrong, must be greater than 19
});

interface IMember {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;
}
