import typia from "typia";

import { DynamicTag } from "./internal/DynamicTag";

const data = DynamicTag.generate();
data["__non_regular_type__0"] = "vulnerable";
typia.misc.prune<DynamicTag>(data);

console.log(data);
