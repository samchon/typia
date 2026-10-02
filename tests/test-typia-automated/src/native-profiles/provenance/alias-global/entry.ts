import { test_native_identity_user_global_alias } from "../../../composite/test_native_identity_user_global_alias";
import { executeProfile } from "../../TestNativeProfile";

void executeProfile("provenance-alias-global", [
  {
    name: "test_native_identity_user_global_alias",
    task: test_native_identity_user_global_alias,
  },
]);
