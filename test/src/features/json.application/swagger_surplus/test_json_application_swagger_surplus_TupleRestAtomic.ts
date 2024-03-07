import typia from "typia";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_TupleRestAtomic =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TupleRestAtomic",
  })(typia.json.application<[TupleRestAtomic], "swagger", true>());
