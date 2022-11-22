import TSON from "../../src";

type Tuple = [];
TSON.createAssert<Tuple>()([]);
TSON.createAssert<{}>()({});
