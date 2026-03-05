import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_llm_parameters_anyof = (): void => {
  interface ICat {
    type: "cat";
    name: string;
    meow: boolean;
  }
  interface IDog {
    type: "dog";
    name: string;
    bark: boolean;
  }
  type Animal = ICat | IDog;

  interface IInput {
    pet: Animal;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestValidator.equals("additionalProperties", params.additionalProperties, false);

  // check pet - discriminated union
  const pet = params.properties["pet"];
  TestValidator.predicate("pet exists", () => pet !== undefined);

  // pet could be reference to Animal or inline anyOf
  if (LlmTypeChecker.isReference(pet!)) {
    TestValidator.predicate("Animal in $defs", () => "Animal" in params.$defs);
    const animalDef = params.$defs["Animal"];
    if (animalDef) {
      TestValidator.predicate("Animal is anyOf", () =>
        LlmTypeChecker.isAnyOf(animalDef),
      );
      if (LlmTypeChecker.isAnyOf(animalDef)) {
        TestValidator.equals("Animal has 2 types", animalDef.anyOf.length, 2);
      }
    }
  } else if (LlmTypeChecker.isAnyOf(pet!)) {
    TestValidator.equals("pet has 2 types", pet.anyOf.length, 2);
  }

  // ICat and IDog should be in $defs
  TestValidator.predicate("ICat in $defs", () => "ICat" in params.$defs);
  TestValidator.predicate("IDog in $defs", () => "IDog" in params.$defs);

  // verify ICat structure
  const catDef = params.$defs["ICat"];
  if (catDef && LlmTypeChecker.isObject(catDef)) {
    TestValidator.predicate("ICat has type", () => "type" in catDef.properties);
    TestValidator.predicate("ICat has name", () => "name" in catDef.properties);
    TestValidator.predicate("ICat has meow", () => "meow" in catDef.properties);
  }

  // verify IDog structure
  const dogDef = params.$defs["IDog"];
  if (dogDef && LlmTypeChecker.isObject(dogDef)) {
    TestValidator.predicate("IDog has type", () => "type" in dogDef.properties);
    TestValidator.predicate("IDog has name", () => "name" in dogDef.properties);
    TestValidator.predicate("IDog has bark", () => "bark" in dogDef.properties);
  }
};
