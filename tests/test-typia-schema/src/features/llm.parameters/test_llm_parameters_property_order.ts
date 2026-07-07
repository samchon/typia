import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia, { tags } from "typia";

/**
 * Verifies typia.llm.parameters preserves interface property order.
 *
 * Locks the object-property emission order used by LLM parameter schemas.
 * JavaScript observes JSON schema object properties through insertion order, so
 * a metadata traversal regression could reorder the prompt-facing shape.
 *
 * 1. Declare plain, tagged, extended, and intersection object types.
 * 2. Call typia.llm.parameters for each interface.
 * 3. Assert properties and required arrays follow declaration order.
 */
export const test_llm_parameters_property_order = (): void => {
  interface IBase {
    baseFirst: string;
    baseSecond: number;
  }
  interface IPlain {
    first: string;
    second: number;
    third: boolean;
  }
  interface IMember {
    id: string & tags.Format<"uuid">;
    email: string & tags.Format<"email">;
    age: number &
      tags.Type<"uint32"> &
      tags.ExclusiveMinimum<19> &
      tags.Maximum<100>;
  }
  interface IDerived extends IBase {
    ownFirst: boolean;
    ownSecond: string[];
  }
  interface IBridge {
    bridgeFirst: boolean;
    bridgeSecond: string & tags.Format<"email">;
  }
  type IIntersected = {
    leftFirst: string & tags.Format<"uuid">;
    leftSecond: number & tags.Type<"uint32">;
  } & IBridge & {
      rightFirst: string;
      rightSecond: number &
        tags.Type<"uint32"> &
        tags.ExclusiveMinimum<19> &
        tags.Maximum<100>;
    };

  const plain: ILlmSchema.IParameters = typia.llm.parameters<IPlain>();
  const member: ILlmSchema.IParameters = typia.llm.parameters<IMember>();
  const derived: ILlmSchema.IParameters = typia.llm.parameters<IDerived>();
  const intersected: ILlmSchema.IParameters =
    typia.llm.parameters<IIntersected>();

  TestValidator.equals("plain properties", Object.keys(plain.properties), [
    "first",
    "second",
    "third",
  ]);
  TestValidator.equals("plain required", plain.required, [
    "first",
    "second",
    "third",
  ]);
  TestValidator.equals("tagged properties", Object.keys(member.properties), [
    "id",
    "email",
    "age",
  ]);
  TestValidator.equals("tagged required", member.required, [
    "id",
    "email",
    "age",
  ]);
  TestValidator.equals("derived properties", Object.keys(derived.properties), [
    "baseFirst",
    "baseSecond",
    "ownFirst",
    "ownSecond",
  ]);
  TestValidator.equals("derived required", derived.required, [
    "baseFirst",
    "baseSecond",
    "ownFirst",
    "ownSecond",
  ]);
  TestValidator.equals(
    "intersected properties",
    Object.keys(intersected.properties),
    [
      "leftFirst",
      "leftSecond",
      "bridgeFirst",
      "bridgeSecond",
      "rightFirst",
      "rightSecond",
    ],
  );
  TestValidator.equals("intersected required", intersected.required, [
    "leftFirst",
    "leftSecond",
    "bridgeFirst",
    "bridgeSecond",
    "rightFirst",
    "rightSecond",
  ]);
};
