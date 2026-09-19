import { IJsonSchemaCollection, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia from "typia";

/**
 * Verifies the native root description of referenced parameters cascades like
 * `LlmSchemaConverter.parameters`.
 *
 * The converter describes a `$ref` root with `JsonDescriptor.cascade`: the
 * type's own description, then the quoted description of the type itself and of
 * each described namespace parent, or `Current Type: {@link Name}` for an
 * undescribed type. The native transform kept only the dereferenced type's own
 * description, so the two paths disagreed on the root (#2405). Parity alone
 * would pass if both drifted together, so the cascade is pinned verbatim too. A
 * parent contributes only when it is in the same components, so the child
 * references it, and each type is converted from its own collection, the one
 * its native parameters see.
 *
 * 1. Convert an undescribed, a described, and a namespaced type both ways.
 * 2. Assert each native parameters schema equals the converter's.
 * 3. Assert each root description reads exactly as the cascade renders it.
 * 4. Assert structured output and application parameters carry the same cascade.
 */
export const test_llm_parameters_parity_converter_namespace = (): void => {
  const collections: IJsonSchemaCollection[] = [
    typia.json.schemas<[IPlain]>(),
    typia.json.schemas<[IMember]>(),
    typia.json.schemas<[IMember.ICreate]>(),
  ];
  const actual = [
    typia.llm.parameters<IPlain>(),
    typia.llm.parameters<IMember>(),
    typia.llm.parameters<IMember.ICreate>(),
  ];
  collections.forEach((collection, i) => {
    const converted = LlmSchemaConverter.parameters({
      config: { strict: false },
      components: collection.components as OpenApi.IComponents,
      schema: collection.schemas[0] as
        | OpenApi.IJsonSchema.IObject
        | OpenApi.IJsonSchema.IReference,
    });
    if (converted.success === false)
      throw new Error(JSON.stringify(converted.error, null, 2));
    TestEquality.equals(
      `parameters[${i}]`,
      clean(actual[i]),
      clean(converted.value),
    );
  });

  TestEquality.equals(
    "descriptions",
    actual.map((p) => p.description),
    [
      "Current Type: {@link IPlain}",
      [
        "A member.",
        "Description of the current {@link IMember} type:\n\n> A member.",
      ].join(SEPARATOR),
      [
        "Creation input.",
        "Description of the current {@link IMember.ICreate} type:\n\n> Creation input.",
        "Description of the parent {@link IMember} type:\n\n> A member.",
      ].join(SEPARATOR),
    ],
  );

  // the other parameters roots share the same builders
  TestEquality.equals(
    "structuredOutput and application",
    [actual[2]!.description, actual[2]!.description],
    [
      typia.llm.structuredOutput<IMember.ICreate>().parameters.description,
      typia.llm.application<IController>().functions[0]?.parameters.description,
    ],
  );
};

const SEPARATOR = "\n\n------------------------------\n\n";

interface IPlain {
  id: string;
}

/** A member. */
interface IMember {
  id: string;
  name: string;
}
namespace IMember {
  /** Creation input. */
  export interface ICreate {
    name: string;
    referrer: IMember | null;
  }
}

interface IController {
  create(input: IMember.ICreate): void;
}

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
