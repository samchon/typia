import { TestEquality } from "@typia/template/equality";
import typia from "typia";

interface CallableInterface {
  (value: number): string;
}
type CallableAlias = (value: number) => string;

interface InterfaceHolder {
  keep: number;
  fn: CallableInterface;
}
interface AliasHolder {
  keep: number;
  fn: CallableAlias;
}

/**
 * Verifies a function member is described identically however it is spelled.
 *
 * A member that is only a function has no JSON, and `json.stringify` omits it.
 * The schema's own skip test disagreed with the serializer twice: it required
 * `Size() === 0`, which a pure function member never is because `Size()` counts
 * functions, and it read the member's own metadata, which carries `Aliases`
 * rather than `Functions` when the function type is reached through a name. So
 * the interface spelling vanished from the document while the two alias
 * spellings survived as a `$ref` to an empty component — two schemas for one
 * type, and neither describing what the serializer produces.
 *
 * 1. Declare one call signature two ways: an interface and a function type alias.
 *    The named-type-literal spelling of the same signature belongs to
 *    samchon/typia#2238, which is what stops it being expanded structurally in
 *    the first place, so it is pinned there rather than here.
 * 2. Generate the schema for a holder of each and require the documents to be
 *    equal.
 * 3. Require the member itself to be absent, so the parity cannot be satisfied by
 *    both describing it wrongly in the same way.
 * 4. Require the neighboring data member to survive, so omission is confined to
 *    the function.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that interface-callable and alias-callable holders omit the function member and retain their data member.
 * @evidence contracts/testing.md#independent-expectations A callable-only property has no JSON value; the authored component count/properties/required object prevents two equally wrong generated schemas from passing parity.
 * @evidence contracts/testing.md#distinguishing-cases Both callable spellings are checked against each other and the fixed keep-only shape; other callable spellings remain owned by their existing regressions.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_function_member_spelling_parity through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Resolved callable provenance must feed the same JSON member-omission rule across source spellings. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Both callable spellings are checked against each other and the fixed keep-only shape; other callable spellings remain owned by their existing regressions. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_function_member_spelling_parity = (): void => {
  const shape = (
    unit: ReturnType<typeof typia.json.schema<InterfaceHolder>>,
  ): unknown => {
    const components = JSON.parse(JSON.stringify(unit.components)) as Record<
      string,
      Record<string, any>
    >;
    const schemas = components.schemas ?? {};
    // Keyed by the holder's own name, which necessarily differs between the two
    // spellings, so compare the shapes rather than the map: the property set,
    // what is required, and how many components the document needed at all. The
    // last one is what catches a leftover component minted for the function.
    const holder = Object.values(schemas)[0] as Record<string, any>;
    return {
      componentCount: Object.keys(schemas).length,
      properties: Object.keys(holder?.properties ?? {}).sort(),
      required: [...(holder?.required ?? [])].sort(),
    };
  };

  TestEquality.equals(
    "alias spelling agrees with interface",
    shape(typia.json.schema<AliasHolder>()),
    shape(typia.json.schema<InterfaceHolder>()),
  );
  TestEquality.equals(
    "the function member is described by neither",
    shape(typia.json.schema<InterfaceHolder>()),
    {
      componentCount: 1,
      properties: ["keep"],
      required: ["keep"],
    },
  );
};
