import typia from "typia";

export interface TypeTagTypeUnion {
  int32_or_uint32: number &
    (typia.tags.Type<"int32"> | typia.tags.Type<"uint32">);
  int32_or_int64: number &
    (typia.tags.Type<"int32"> | typia.tags.Type<"int64">);
  int32_or_uint64: number &
    (typia.tags.Type<"int32"> | typia.tags.Type<"uint64">);
  int32_or_float: number &
    (typia.tags.Type<"int32"> | typia.tags.Type<"float">);
  int32_or_double: number &
    (typia.tags.Type<"int32"> | typia.tags.Type<"double">);
  int64_or_uint64: number &
    (typia.tags.Type<"int64"> | typia.tags.Type<"uint64">);
  int64_or_float: number &
    (typia.tags.Type<"int64"> | typia.tags.Type<"float">);
  int64_or_double: number &
    (typia.tags.Type<"int64"> | typia.tags.Type<"double">);
  float_or_double: number &
    (typia.tags.Type<"float"> | typia.tags.Type<"double">);
  everything: number &
    (
      | typia.tags.Type<"int32">
      | typia.tags.Type<"uint32">
      | typia.tags.Type<"int64">
      | typia.tags.Type<"uint64">
      | typia.tags.Type<"float">
      | typia.tags.Type<"double">
    );
}
export namespace TypeTagTypeUnion {
  export const JSONABLE = false;

  export const generate = (): TypeTagTypeUnion => ({
    int32_or_uint32: -1,
    int32_or_int64: -120,
    int32_or_uint64: -900,
    int32_or_float: 3.141592,
    int32_or_double: 2.718281828459045,
    int64_or_uint64: -2,
    int64_or_float: 0.1,
    int64_or_double: 0.2,
    float_or_double: 0.3,
    everything: 0,
  });
}
