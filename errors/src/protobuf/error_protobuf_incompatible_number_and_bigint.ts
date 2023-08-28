import typia from "typia";

interface IPointer<T> {
    value: T;
}

typia.protobuf.message<
    IPointer<
        | (number & typia.tags.Type<"int64">)
        | (bigint & typia.tags.Type<"int64">)
    >
>();

typia.protobuf.message<
    IPointer<
        | (number & typia.tags.Type<"uint64">)
        | (bigint & typia.tags.Type<"uint64">)
    >
>();
