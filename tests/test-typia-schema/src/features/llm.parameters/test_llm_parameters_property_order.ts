import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.parameters is evaluated by the native host on the types declared in this case and the result is checked by 8 assertions (plain properties; plain required; tagged properties; tagged required; derived properties; derived required). The case documents its purpose as: Verifies typia.llm.parameters preserves interface property order.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Locks the object-property emission order used by LLM parameter schemas. JavaScript observes JSON schema object properties through insertion order, so a metadata traversal regression could reorder the prompt-facing shape. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (plain properties; plain required; tagged properties; tagged required; derived properties; derived required) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_parameters_property_order is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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

  TestEquality.equals("plain properties", Object.keys(plain.properties), [
    "first",
    "second",
    "third",
  ]);
  TestEquality.equals("plain required", plain.required, [
    "first",
    "second",
    "third",
  ]);
  TestEquality.equals("tagged properties", Object.keys(member.properties), [
    "id",
    "email",
    "age",
  ]);
  TestEquality.equals("tagged required", member.required, [
    "id",
    "email",
    "age",
  ]);
  TestEquality.equals("derived properties", Object.keys(derived.properties), [
    "baseFirst",
    "baseSecond",
    "ownFirst",
    "ownSecond",
  ]);
  TestEquality.equals("derived required", derived.required, [
    "baseFirst",
    "baseSecond",
    "ownFirst",
    "ownSecond",
  ]);
  TestEquality.equals(
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
  TestEquality.equals("intersected required", intersected.required, [
    "leftFirst",
    "leftSecond",
    "bridgeFirst",
    "bridgeSecond",
    "rightFirst",
    "rightSecond",
  ]);
};
