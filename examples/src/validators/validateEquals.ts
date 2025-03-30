import typia, { tags } from "typia";

const res: typia.IValidation<IMember> = typia.validateEquals<IMember>({
  age: 30,
  email: "samchon.github@gmail.com",
  id: "something", // wrong, must be string (uuid)
  sex: 1, // extra property
});
if (res.success === false) console.log(res.errors);

interface IMember {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;
}
