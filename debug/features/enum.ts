import typia from "typia";

import { TestValidator } from "./internal/TestValidator";

const app = typia.json.application<[ConstEnum]>();
console.log(app.components.schemas?.ConstEnum);

TestValidator.equals("enum-description")(app.components.schemas?.ConstEnum)({
  oneOf: [
    {
      const: 1,
      title: "The value one",
      description:
        "The value one.\n\nThe value one defined in the constant enumeration.",
    },
    {
      const: 2,
      title: "The value two",
      description:
        "The value two.\n\nThe value two defined in the constant enumeration.",
    },
  ],
});

const enum ConstEnum {
  /**
   * The value one.
   *
   * The value one defined in the constant enumeration.
   */
  ONE = 1,

  /**
   * The value two.
   *
   * The value two defined in the constant enumeration.
   */
  TWO = 2,
}
