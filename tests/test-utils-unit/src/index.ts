import test from "node:test";

import { test_naming_convention_camel } from "./features/naming/test_naming_convention_camel";
import { test_naming_convention_empty } from "./features/naming/test_naming_convention_empty";
import { test_naming_convention_kebab } from "./features/naming/test_naming_convention_kebab";
import { test_naming_convention_localize } from "./features/naming/test_naming_convention_localize";
import { test_naming_convention_pascal } from "./features/naming/test_naming_convention_pascal";
import { test_naming_convention_reserved } from "./features/naming/test_naming_convention_reserved";
import { test_naming_convention_snake } from "./features/naming/test_naming_convention_snake";
import { test_naming_convention_variable } from "./features/naming/test_naming_convention_variable";
import { test_dedent_interpolation } from "./features/test_dedent_interpolation";
import { test_equality_async_result_refusal } from "./features/test_equality_async_result_refusal";
import { test_map_util_take } from "./features/test_map_util_take";
import { test_singleton_lifecycle } from "./features/test_singleton_lifecycle";

test("MapUtil.take preserves map membership", test_map_util_take);
test("dedent preserves opaque interpolations", test_dedent_interpolation);
test("Singleton retains the first returned value", test_singleton_lifecycle);
test(
  "Synchronous exception probes refuse async results",
  test_equality_async_result_refusal,
);

for (const feature of [
  test_naming_convention_camel,
  test_naming_convention_empty,
  test_naming_convention_kebab,
  test_naming_convention_localize,
  test_naming_convention_pascal,
  test_naming_convention_reserved,
  test_naming_convention_snake,
  test_naming_convention_variable,
])
  test(feature.name, feature);
