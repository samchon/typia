import typia from "typia";

import { NativeSimple } from "../structures/NativeSimple";

const data = typia.random<NativeSimple>();
typia.assert(data);
