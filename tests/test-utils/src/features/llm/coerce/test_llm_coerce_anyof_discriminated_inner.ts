import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IDog {
  type: "dog";
  bark: boolean;
  age: number;
}

interface ICat {
  type: "cat";
  meow: boolean;
  lives: number;
}

interface IAnimal {
  animal: IDog | ICat;
}

export const test_llm_coerce_anyof_discriminated_inner = (): void => {
  const parameters = typia.llm.parameters<IAnimal>();

  // Object value with inner properties double-stringified.
  // Discriminator must identify Dog schema so bark/age are coerced correctly.
  const corrupted = {
    animal: {
      type: "dog",
      bark: JSON.stringify(true) as unknown,
      age: JSON.stringify(5) as unknown,
    },
  };

  const result = LlmJson.parse<IAnimal>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    const animal = result.data.animal as IDog;
    TestValidator.equals("type", animal.type, "dog");
    TestValidator.equals("bark", animal.bark, true);
    TestValidator.equals("age", animal.age, 5);
  }
};
