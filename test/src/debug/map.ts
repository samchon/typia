import typia from "typia";

import { TypeTagRange } from "../structures/TypeTagRange";

type M = Map<string, string>;
type S = Set<number>;

typia.createIs<M>();

typia.createIs<S>();

console.log(JSON.stringify(typia.json.schema<TypeTagRange>(), null, 2));
