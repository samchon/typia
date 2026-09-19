import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_reflect_name_object = (): void => {
  interface IMember {
    id: number;
    name: string;
  }

  TestEquality.equals("named object", typia.reflect.name<IMember>(), "IMember");
};
