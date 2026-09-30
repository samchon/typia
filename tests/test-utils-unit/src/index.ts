import test from "node:test";

import { test_dedent_interpolation } from "./features/test_dedent_interpolation";
import { test_map_util_take } from "./features/test_map_util_take";

test("MapUtil.take preserves map membership", test_map_util_take);
test("dedent preserves opaque interpolations", test_dedent_interpolation);
