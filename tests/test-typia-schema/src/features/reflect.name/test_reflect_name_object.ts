import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_reflect_name_object = (): void => {
  interface IMember {
    id: number;
    name: string;
  }

  TestValidator.equals("named object", typia.reflect.name<IMember>(), "IMember");
};
