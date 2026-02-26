import typia, { tags } from "typia";

const json: string = JSON.stringify(typia.random<IMember>());
const parsed: IMember = typia.json.assertParse<IMember>(json);

console.log(json === JSON.stringify(parsed)); // true

interface IMember {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;
}
