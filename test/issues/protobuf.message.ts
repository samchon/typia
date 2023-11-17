import fs from "fs";
import typia from "typia";
import { Type } from "typia/lib/tags";

export interface TypeTagExample {
  // ATOMIC TYPES
  int32: number & typia.tags.Type<"int32">;
  uint32: number & typia.tags.Type<"uint32">;
  uint64: bigint & typia.tags.Type<"uint64">;
  int64: number & typia.tags.Type<"int64">;
  float: number & typia.tags.Type<"float">;
  double: number | undefined;
  string: string | null;

  // UNION TYPES
  uint32_or_double: number & (Type<"uint32"> | Type<"double">);
  int32_or_uint64: (number & Type<"int32">) | (bigint & Type<"uint64">);
  int32_or_float_or_uint64:
    | (number & (Type<"int32"> | Type<"float">))
    | (bigint & Type<"uint64">);

  // ARRAY AND MAP
  uint64_array: Array<bigint & Type<"uint64">>;
  int32_map?: Map<number & Type<"int32">, string> | null;
}

fs.writeFileSync(
  `${__dirname}/protobuf.message.proto`,
  typia.protobuf.message<TypeTagExample>(),
  "utf8",
);
