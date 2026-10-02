import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies the 3.1 collection retains exact ordered roots and the article
 * component's nested author reference.
 *
 * Native collection generation must connect root and nested references to the
 * correct shared components.
 *
 * 1. Produce the collection from the tuple of declared source types.
 * 2. Assert root identity and schema meaning using independent expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that the 3.1 collection retains exact ordered roots and the article component's nested author reference.
 * @evidence contracts/testing.md#independent-expectations Handwritten reference/nullable/root/article objects follow the declared tuple and interface member semantics rather than current generated output.
 * @evidence contracts/testing.md#distinguishing-cases Both named roots and the nullable string root, nested IMember author reference, required fields and closed additionalProperties remain.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schemas_spec_collection_refs in test-typia-schema start. Actual typia.json calls and any complementary generated validator are rewritten in the suite project; the emitted results are evaluated and consumed in the existing process.
 * @evidence contracts/e2e.md#necessary-boundary Native collection generation must connect root and nested references to the correct shared components. Direct converter/writer unit calls cannot establish actual TypeScript call/signature resolution and evaluated public schema assembly together.
 * @evidence contracts/e2e.md#shared-execution All declared variants join the existing ttsx schema-suite project and process. Siblings reuse the content-keyed native plugin artifact; the case adds no independent compiler launch or install per type/dialect.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Generated collections/applications and conversion projections are invocation-local; declarations remain immutable. ttsc owns content-keyed artifact invalidation and the suite owns process termination. No cold-cache or installation transition is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Both named roots and the nullable string root, nested IMember author reference, required fields and closed additionalProperties remain. Every original producer call, conversion and assertion remains enrolled under the same exported name; no meaningfully different dialect or graph consumer was deleted.
 */
export const test_json_schemas_spec_collection_refs = (): void => {
  interface IMember {
    id: string;
  }
  interface IArticle {
    author: IMember;
    title: string;
  }

  const collection = typia.json.schemas<[IMember, IArticle, string | null]>();
  TestEquality.equals("collection version", collection.version, "3.1");
  TestEquality.equals("collection schemas", clean(collection.schemas), [
    {
      $ref: "#/components/schemas/IMember",
    },
    {
      $ref: "#/components/schemas/IArticle",
    },
    {
      oneOf: [
        {
          type: "null",
        },
        {
          type: "string",
        },
      ],
    },
  ]);
  TestEquality.equals(
    "article component",
    clean(collection.components.schemas?.IArticle),
    {
      type: "object",
      properties: {
        author: {
          $ref: "#/components/schemas/IMember",
        },
        title: {
          type: "string",
        },
      },
      required: ["author", "title"],
      additionalProperties: false,
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
