import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { IJsonSchemaCollection } from "typia";

/**
 * Verifies four ordered collection roots preserve each object reference and
 * inline string/number kind.
 *
 * Plural native schema generation must retain input tuple order and
 * named-reference identity.
 *
 * 1. Produce the collection from the tuple of declared source types.
 * 2. Assert root identity and schema meaning using independent expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that four ordered collection roots preserve each object reference and inline string/number kind.
 * @evidence contracts/testing.md#independent-expectations The authored [IMember,IArticle,string,number] tuple supplies fixed root positions and exact component references.
 * @evidence contracts/testing.md#distinguishing-cases All original kind/count/component-presence checks remain; exact IMember/IArticle reference objects now prevent two object roots from swapping identities.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schemas in test-typia-schema start. Actual typia.json calls and any complementary generated validator are rewritten in the suite project; the emitted results are evaluated and consumed in the existing process.
 * @evidence contracts/e2e.md#necessary-boundary Plural native schema generation must retain input tuple order and named-reference identity. Direct converter/writer unit calls cannot establish actual TypeScript call/signature resolution and evaluated public schema assembly together.
 * @evidence contracts/e2e.md#shared-execution All declared variants join the existing ttsx schema-suite project and process. Siblings reuse the content-keyed native plugin artifact; the case adds no independent compiler launch or install per type/dialect.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Generated collections/applications and conversion projections are invocation-local; declarations remain immutable. ttsc owns content-keyed artifact invalidation and the suite owns process termination. No cold-cache or installation transition is asserted.
 * @evidence contracts/e2e.md#preserved-coverage All original kind/count/component-presence checks remain; exact IMember/IArticle reference objects now prevent two object roots from swapping identities. Every original producer call, conversion and assertion remains enrolled under the same exported name; no meaningfully different dialect or graph consumer was deleted.
 */
export const test_json_schemas = (): void => {
  interface IMember {
    id: number;
    name: string;
  }
  interface IArticle {
    title: string;
    body: string;
    author: IMember;
  }

  const collection: IJsonSchemaCollection =
    typia.json.schemas<[IMember, IArticle, string, number]>();

  // schemas array has 4 items
  TestEquality.equals("schemas count", collection.schemas.length, 4);

  // named types use $ref
  TestValidator.predicate("IMember is ref", () =>
    OpenApiTypeChecker.isReference(collection.schemas[0]!),
  );
  TestValidator.predicate("IArticle is ref", () =>
    OpenApiTypeChecker.isReference(collection.schemas[1]!),
  );
  TestEquality.equals("IMember owns its reference", collection.schemas[0], {
    $ref: "#/components/schemas/IMember",
  });
  TestEquality.equals("IArticle owns its reference", collection.schemas[1], {
    $ref: "#/components/schemas/IArticle",
  });

  // primitive types are inline
  TestValidator.predicate("string is inline", () =>
    OpenApiTypeChecker.isString(collection.schemas[2]!),
  );
  TestValidator.predicate("number is inline", () =>
    OpenApiTypeChecker.isNumber(collection.schemas[3]!),
  );

  // components has both named types
  TestValidator.predicate(
    "components has IMember",
    () =>
      collection.components.schemas !== undefined &&
      "IMember" in collection.components.schemas,
  );
  TestValidator.predicate(
    "components has IArticle",
    () =>
      collection.components.schemas !== undefined &&
      "IArticle" in collection.components.schemas,
  );
};
