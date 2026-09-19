import { TestEquality } from "@typia/template/equality";
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

export const test_llm_coerce_anyof_discriminated_second = (): void => {
  const parameters = typia.llm.parameters<IAnimal>();

  // Select the SECOND variant (Cat) to verify discriminator doesn't
  // just pick the first object schema.
  const corrupted = {
    animal: {
      type: "cat",
      meow: JSON.stringify(false) as unknown,
      lives: JSON.stringify(9) as unknown,
    },
  };

  const result = LlmJson.parse<IAnimal>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    const animal = result.data.animal as ICat;
    TestEquality.equals("type", animal.type, "cat");
    TestEquality.equals("meow", animal.meow, false);
    TestEquality.equals("lives", animal.lives, 9);
  }
};
