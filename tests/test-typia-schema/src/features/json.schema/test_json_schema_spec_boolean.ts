import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_json_schema_spec_boolean = (): void => {
  TestEquality.equals("boolean", clean(typia.json.schema<boolean>().schema), {
    type: "boolean",
  });
  TestEquality.equals("true literal", clean(typia.json.schema<true>().schema), {
    const: true,
  });
  TestEquality.equals(
    "boolean literal union collapses to boolean",
    clean(typia.json.schema<true | false>().schema),
    {
      type: "boolean",
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
