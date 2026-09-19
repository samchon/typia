import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_json_schema_spec_null_unknown = (): void => {
  TestEquality.equals("null", clean(typia.json.schema<null>().schema), {
    type: "null",
  });
  TestEquality.equals("any", clean(typia.json.schema<any>().schema), {});
  TestEquality.equals(
    "unknown",
    clean(typia.json.schema<unknown>().schema),
    {},
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
