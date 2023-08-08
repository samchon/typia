import typia from "typia";

type Tuple = [];
typia.createAssert<Tuple>()([]);
typia.createAssert<{}>()({});
