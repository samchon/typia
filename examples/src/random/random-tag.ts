import typia, { tags } from "typia";

const data: TypeTag = typia.random<TypeTag>();

console.log(data);

interface TypeTag {
  type: number & tags.Type<"int32">;
  number?: number & tags.ExclusiveMinimum<19> & tags.Maximum<100>;
  string: string & tags.MinLength<3>;
  pattern: string & tags.Pattern<"^[a-z]+$">;
  format: (string & tags.Format<"date-time">) | null;
}
