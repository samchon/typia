import { test_native_identity_collection } from "../../../composite/test_native_identity_collection";
import { test_native_identity_node_buffer } from "../../../composite/test_native_identity_node_buffer";
import { test_native_identity_package_declaration } from "../../../composite/test_native_identity_package_declaration";
import { test_native_identity_user_global_provided } from "../../../composite/test_native_identity_user_global_provided";
import { executeProfile } from "../../TestNativeProfile";

void executeProfile("provenance-node", [
  {
    name: "test_native_identity_collection",
    task: test_native_identity_collection,
  },
  {
    name: "test_native_identity_node_buffer",
    task: test_native_identity_node_buffer,
  },
  {
    name: "test_native_identity_package_declaration",
    task: test_native_identity_package_declaration,
  },
  {
    name: "test_native_identity_user_global_provided",
    task: test_native_identity_user_global_provided,
  },
]);
