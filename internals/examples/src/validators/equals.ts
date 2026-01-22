import typia, { tags } from "typia";
import { v4 } from "uuid";

const input: unknown = {
  id: v4(),
  email: "samchon.github@gmail.com",
  age: 30,
  extra: "superfluous property", // extra
};
const is: boolean = typia.is<IMember>(input);
const equals: boolean = typia.equals<IMember>(input);

console.log(is, equals); // true, false

interface IMember {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;
}
