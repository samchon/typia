import typia from "../../src";

type Tuple = [];
typia.createAssert<Tuple>()([]);
typia.createAssert<{}>()({});
