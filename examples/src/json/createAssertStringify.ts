import typia, { tags } from "typia";

export const assertDepartment = typia.json.createAssertStringify<IDepartment>();

interface IDepartment {
  id: string & tags.Format<"uuid">;
  name: string & tags.MinLength<3>;
  limit: number & tags.Type<"int32">;
  clerks: IClerk[];
}
interface IClerk {
  name: string;
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;
  authority: number;
  joined_at: string & tags.Format<"date">;
}
