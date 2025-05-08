import typia, { tags } from "typia";
import { v4 } from "uuid";

typia.assertEquals<IMember>({
  id: v4(),
  email: "samchon.github@gmail.com",
  age: 30,
  sex: 1, // extra
});

interface IMember {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;
}
