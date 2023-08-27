import typia from "typia";

type INT32 = number & (typia.tags.Type<"int32"> | typia.tags.Type<"int64">);

typia.assert<INT32>(1.5);
