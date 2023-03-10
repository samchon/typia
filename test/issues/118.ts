import typia from "typia";

import { ObjectSimple } from "../structures/ObjectSimple";

const data = ObjectSimple.generate();
data.position.x = "wrong" as any as number;

typia.assert(data);
