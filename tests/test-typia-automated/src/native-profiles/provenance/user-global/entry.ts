import { test_native_identity_user_global } from "../../../composite/test_native_identity_user_global";
import { executeProfile } from "../../TestNativeProfile";

void executeProfile("provenance-user-global", [
  {
    name: "test_native_identity_user_global",
    task: test_native_identity_user_global,
  },
]);
