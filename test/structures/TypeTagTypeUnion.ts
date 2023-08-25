import typia from "typia";

export interface TagCustom {
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
export namespace TagCustom {}
