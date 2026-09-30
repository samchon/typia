import assert from "node:assert/strict";
import typia from "typia";

/**
 * Verifies reflected type-tag payloads exclude blank JSDoc separators.
 *
 * The native parser can expose a blank starred line after an unbraced type tag
 * as description text. Reflection must retain the actual integer value without
 * adding that delimiter to the serialized public metadata.
 *
 * 1. Reflect one interface with unbraced, braced and literal-star tag inputs.
 * 2. Assert the complete emitted tag arrays and retain real description text.
 *
 * @evidence contracts/testing.md#behavioral-verification The public reflect.schema transform emits property metadata; node:assert checks complete tag arrays, detecting an extra delimiter payload and loss of genuine star descriptions.
 * @evidence contracts/testing.md#independent-expectations Literal tag names and data correspond to the authored type, minimum and title inputs; blank starred lines delimit JSDoc rather than adding tag values, while literal-star descriptions are intentional input data.
 * @evidence contracts/testing.md#distinguishing-cases Unbraced and braced integer tags must expose the same type and minimum values; the third property keeps a genuine asterisk in its type description as a negative twin for unconditional star removal. Exact property count and complete arrays reject missing output as well as added payload.
 * @evidence contracts/testing.md#execution-ownership test-typia-schema start discovers this exported test through DynamicExecutor; its inherited typia plugin executes the actual native producer, unlike the direct metadata-helper Go unit.
 * @evidence contracts/e2e.md#necessary-boundary Native JSDoc extraction, metadata serialization and the public transformed reflect.schema result meet here; the Go unit alone cannot prove the emitted consumer shape preserves the extracted payload.
 * @evidence contracts/e2e.md#shared-execution All three property spellings are compiled in one interface and one reflection call through the existing schema workspace's shared native preparation; no extra installation or process is launched for a spelling.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The interface and returned metadata are local to this case and no fixture or cache is mutated; the existing suite owns the compilation process and content-addressed plugin artifact, so preceding cases cannot supply these assertion values.
 * @evidence contracts/e2e.md#preserved-coverage This new minimal reflection connection complements TestJsDocTypeTagBlankSeparation's direct parser/helper variants; all three complete public tag arrays execute here, while parser spelling details remain in the unit.
 */
export const test_reflect_schema_jsdoc_type_separator = (): void => {
  interface ITagged {
    /**
     * @type int
     *
     * @minimum 3
     *
     * @title literal * marks
     */
    unbraced: number;

    /**
     * @type {int}
     *
     * @minimum 3
     *
     * @title literal * marks
     */
    braced: number;

    /** @type int * */
    literal: number;
  }
  const unit = typia.reflect.schema<ITagged>();
  assert.equal(unit.components.objects.length, 1, "one reflected interface");
  const properties = unit.components.objects[0]!.properties;
  assert.equal(properties.length, 3, "every authored property survives");
  const common = [
    { name: "type", text: [{ kind: "text", text: "int" }] },
    { name: "minimum", text: [{ kind: "text", text: "3" }] },
    { name: "title", text: [{ kind: "text", text: "literal * marks" }] },
  ];
  assert.deepEqual(properties[0]!.jsDocTags, common, "unbraced type tag");
  assert.deepEqual(properties[1]!.jsDocTags, common, "braced type tag");
  assert.deepEqual(
    properties[2]!.jsDocTags,
    [
      {
        name: "type",
        text: [
          { kind: "text", text: "int" },
          { kind: "text", text: "*" },
        ],
      },
    ],
    "genuine asterisk description",
  );
};
