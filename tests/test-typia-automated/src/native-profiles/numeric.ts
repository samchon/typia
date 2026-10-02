import { test_native_finite_option_number_leaf } from "../composite/test_native_finite_option_number_leaf";
import { test_native_json_is_stringify_finite_number } from "../composite/test_native_json_is_stringify_finite_number";
import { executeProfile } from "./TestNativeProfile";

declare const process: { argv: string[] };
const mode = process.argv[2];
if (mode !== "numeric" && mode !== "finite" && mode !== "finite-numeric")
  throw new Error(`Unknown numeric profile ${mode}`);
executeProfile(mode, [
  {
    name: "test_native_finite_option_number_leaf",
    task: () => test_native_finite_option_number_leaf(mode),
  },
  {
    name: "test_native_json_is_stringify_finite_number",
    task: () => test_native_json_is_stringify_finite_number(),
  },
]);
