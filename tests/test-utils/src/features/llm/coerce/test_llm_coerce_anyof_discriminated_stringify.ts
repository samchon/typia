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

export const test_llm_coerce_anyof_discriminated_stringify = (): void => {
  const parameters = typia.llm.parameters<IAnimal>();

  // Entire discriminated union member is double-stringified.
  // After parsing the string, discriminator must identify the right schema.
  const corrupted = {
    animal: JSON.stringify({ type: "cat", meow: true, lives: 9 }) as unknown,
  };

  const result = LlmJson.parse<IAnimal>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    const animal = result.data.animal as ICat;
    TestValidator.equals("type", animal.type, "cat");
    TestValidator.equals("meow", animal.meow, true);
    TestValidator.equals("lives", animal.lives, 9);
  }
};
