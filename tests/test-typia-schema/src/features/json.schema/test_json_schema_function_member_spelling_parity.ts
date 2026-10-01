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
 *    all three describing it wrongly in the same way.
 * 4. Require the neighboring data member to survive, so omission is confined to
 *    the function.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (alias spelling agrees with interface; the function member is described by neither). The case documents its purpose as: Verifies a function member is described identically however it is spelled.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: A member that is only a function has no JSON, and `json.stringify` omits it. The schema's own skip test disagreed with the serializer twice: it required `Size() === 0`, which a pure function member never is because `Size()` counts functions, and it read the member's own metadata, which carries `Aliases` rather than `Functions` when the function type is reached through a name. So the interface spelling vanished from the document while the two alias spellings survived as a `$ref` to an empty component — two schemas for one type, and neither describing what the serializer produces. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (alias spelling agrees with interface; the function member is described by neither) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_function_member_spelling_parity is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
