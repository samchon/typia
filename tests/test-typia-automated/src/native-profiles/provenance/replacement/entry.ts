import { test_native_identity_lib_replacement } from "../../../composite/test_native_identity_lib_replacement";
import { executeProfile } from "../../TestNativeProfile";

void executeProfile("provenance-replacement", [
  {
    name: "test_native_identity_lib_replacement",
    task: test_native_identity_lib_replacement,
  },
]);
