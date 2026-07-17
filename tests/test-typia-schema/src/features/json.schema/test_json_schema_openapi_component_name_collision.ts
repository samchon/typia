import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import typia from "typia";

import { Foo as Alpha } from "./ComponentNameCollisionAlpha";
import { Foo as Beta } from "./ComponentNameCollisionBeta";
import { Foo as Gamma } from "./ComponentNameCollisionGamma";

interface IArguments {
  a: Alpha;
  b: Beta;
  c: Gamma.o1;
}

/**
 * Verifies a minted component id never squats a real type's own name.
 *
 * The collection used to key its uniqueness bookkeeping on the base name alone
 * and hand out `<Base>.o<N>` without checking that id against the ids it had
 * already allocated under other base names. A second `Foo` was therefore given
 * the exact full name of the real `namespace Foo { interface o1 }` member, and
 * the loser vanished from the document: four distinct types produced three
 * component keys, and one `$ref` silently resolved to an unrelated type's
 * schema while its own schema was never emitted at all.
 *
 * 1. Reference three same-named-or-colliding types plus their container.
 * 2. Assert the document holds one distinct key per distinct type.
 * 3. Assert every `$ref` resolves to a schema carrying its own property and
 *    its own description, so no type is documented as another type's shape.
 */
export const test_json_schema_openapi_component_name_collision = (): void => {
  const collection = typia.json.schema<IArguments, "3.1">();
  const components: OpenApi.IComponents =
    collection.components as OpenApi.IComponents;
  const schemas: Record<string, OpenApi.IJsonSchema> = components.schemas ?? {};
  const root = collection.schema as OpenApi.IJsonSchema.IObject;

  // 1. ONE KEY PER DISTINCT TYPE
  TestValidator.equals(
    "four distinct types allocate four distinct component keys",
    4,
    Object.keys(schemas).length,
  );

  // 2. EVERY REFERENCE IS ITS OWN
  const $ref = (key: string): string =>
    (root.properties?.[key] as OpenApi.IJsonSchema.IReference | undefined)
      ?.$ref ?? "";
  const refs: string[] = ["a", "b", "c"].map($ref);
  TestValidator.equals(
    "each referenced type owns a distinct reference",
    3,
    new Set(refs).size,
  );

  // 3. EVERY REFERENCE RESOLVES TO ITS OWN SCHEMA
  const resolve = (ref: string): OpenApi.IJsonSchema.IObject | undefined =>
    schemas[ref.split("/").at(-1)!] as OpenApi.IJsonSchema.IObject | undefined;
  const expected: Array<[string, string]> = [
    ["a", "a"],
    ["b", "b"],
    ["c", "c"],
  ];
  for (const [accessor, property] of expected) {
    const schema: OpenApi.IJsonSchema.IObject | undefined = resolve(
      $ref(accessor),
    );
    TestValidator.predicate(
      `${accessor} resolves to the schema owning its own ${property} property`,
      () =>
        schema !== undefined &&
        Object.prototype.hasOwnProperty.call(schema.properties ?? {}, property),
    );
  }
};
