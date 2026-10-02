import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/** UNRELATED INTERFACE that happens to own an escaped base name. */
interface RecursiveObjectA_x2F_B {
  unrelated: string;
}

/** GENERIC RECURSIVE OBJECT whose forbidden instantiation must be escaped. */
type RecursiveObject<T extends string> = {
  value: T;
  children: RecursiveObject<T>[];
};

interface IArguments {
  collision: RecursiveObjectA_x2F_B;
  slash: RecursiveObject<"A/B">;
}

/**
 * Verifies an escaped component name never inherits an unrelated description.
 *
 * `JsonDescriptor.cascade` reads every dotted prefix of a component key as a
 * namespace parent and inherits that parent's description, which is the
 * intended `Qualified.Member` behavior. The component-name allocator must
 * therefore never join its disambiguating suffix with a dot: the escaped base
 * of `RecursiveObject<"A/B">` is exactly the legal name of the unrelated
 * `RecursiveObjectA_x2F_B` interface, so a dotted suffix would present that
 * interface as a parent and leak its description into the escaped schema an LLM
 * reads.
 *
 * 1. Declare an interface owning the escaped base name of a forbidden type.
 * 2. Generate the schema so both land in `components.schemas`.
 * 3. Assert the escaped name exposes no allocated component as a parent, and that
 *    its escaped description never mentions the unrelated interface.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that escaped collision names resolve and retain their own prose without inheriting unrelated interface prose.
 * @evidence contracts/testing.md#independent-expectations Authored UNRELATED/GENERIC RECURSIVE OBJECT descriptions and legal-key grammar distinguish leaked namespace ancestry.
 * @evidence contracts/testing.md#distinguishing-cases Occupied escape-base versus actual generic instantiation are separate names; successful escape is required before the own/unrelated description comparisons.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_openapi_component_name_cascade through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native component allocation must produce names the runtime descriptor interprets without invented namespace parents. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Occupied escape-base versus actual generic instantiation are separate names; successful escape is required before the own/unrelated description comparisons. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_openapi_component_name_cascade = (): void => {
  const collection = typia.json.schema<IArguments, "3.1">();
  const components: OpenApi.IComponents =
    collection.components as OpenApi.IComponents;
  const schemas: Record<string, OpenApi.IJsonSchema> = components.schemas ?? {};

  const escapedKey: string | undefined = Object.keys(schemas).find(
    (key) => key.startsWith("RecursiveObjectA_x2F_B") && key !== base,
  );
  TestValidator.predicate(
    "the forbidden instantiation is allocated a distinct legal key",
    () =>
      escapedKey !== undefined &&
      /^[a-zA-Z0-9.\-_]+$/.test(escapedKey) &&
      Object.prototype.hasOwnProperty.call(schemas, base),
  );
  if (escapedKey === undefined) return;

  for (const key of Object.keys(schemas))
    TestValidator.predicate(
      `${JSON.stringify(key)} claims no allocated component as a namespace parent`,
      () =>
        key
          .split(".")
          .slice(0, -1)
          .map((_, i, array) => array.slice(0, i + 1).join("."))
          .every(
            (parent) =>
              Object.prototype.hasOwnProperty.call(schemas, parent) === false,
          ),
    );

  const escaped = OpenApiTypeChecker.escape({
    components,
    schema: { $ref: `#/components/schemas/${escapedKey}` },
    recursive: 1,
  });
  TestValidator.predicate("the escaped reference resolves", escaped.success);
  if (escaped.success === false) return;
  TestValidator.predicate(
    "the escaped schema does not inherit the unrelated description",
    () => (escaped.value?.description ?? "").includes("UNRELATED") === false,
  );
  TestValidator.predicate("the escaped schema keeps its own description", () =>
    (escaped.value?.description ?? "").includes("GENERIC RECURSIVE OBJECT"),
  );
};

const base = "RecursiveObjectA_x2F_B";
