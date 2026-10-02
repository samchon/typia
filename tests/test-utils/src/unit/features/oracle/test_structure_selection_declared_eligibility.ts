import { TestStructureSelector } from "@typia/template/structure-selector";
import assert from "node:assert/strict";

/**
 * Verifies schema fixture selection follows own declared eligibility.
 *
 * The former source scan treated equivalent false declarations differently and
 * could lose a valid fixture because of a comment. Distinct schema eligibility
 * must also preserve surplus coverage when the native matrix is ineligible.
 *
 * 1. Compare ordinary and equality populations against explicit flag scenarios.
 * 2. Check absent flags, prototype inheritance and missing declaration errors.
 * 3. Retain candidate order and ignore non-source entries and the index barrel.
 */
export const test_structure_selection_declared_eligibility = (): void => {
  const scenarios: {
    name: string;
    declaration: TestStructureSelector.IStructure;
    ordinary: boolean;
    equality: boolean;
  }[] = [
    { name: "Default", declaration: {}, ordinary: true, equality: true },
    {
      name: "JsonFalse",
      declaration: { JSONABLE: false, SCHEMA_EQUALS: true },
      ordinary: false,
      equality: false,
    },
    {
      name: "NativeFalse",
      declaration: { ADDABLE: false },
      ordinary: true,
      equality: false,
    },
    {
      name: "SchemaOverrideTrue",
      declaration: { ADDABLE: false, SCHEMA_EQUALS: true },
      ordinary: true,
      equality: true,
    },
    {
      name: "SchemaOverrideFalse",
      declaration: { ADDABLE: true, SCHEMA_EQUALS: false },
      ordinary: true,
      equality: false,
    },
    {
      name: "SchemaFalseWithoutNativeFlag",
      declaration: { SCHEMA_EQUALS: false },
      ordinary: true,
      equality: false,
    },
    {
      name: "UndefinedOverride",
      declaration: { ADDABLE: false, SCHEMA_EQUALS: undefined },
      ordinary: true,
      equality: false,
    },
    {
      name: "ExplicitTrue",
      declaration: { JSONABLE: true, ADDABLE: true },
      ordinary: true,
      equality: true,
    },
    {
      name: "AnnotatedFalse",
      declaration: { ADDABLE: false },
      ordinary: true,
      equality: false,
    },
    {
      name: "UnannotatedFalse",
      declaration: { ADDABLE: false },
      ordinary: true,
      equality: false,
    },
  ];
  for (const scenario of scenarios)
    for (const equals of [false, true])
      assert.deepEqual(
        TestStructureSelector.select({
          files: [scenario.name + ".ts"],
          declarations: { [scenario.name]: scenario.declaration },
          equals,
        }),
        (equals ? scenario.equality : scenario.ordinary) ? [scenario.name] : [],
        scenario.name + (equals ? " equality" : " ordinary"),
      );

  for (const equals of [false, true]) {
    assert.deepEqual(
      TestStructureSelector.select({ files: [], declarations: {}, equals }),
      [],
    );
    assert.deepEqual(
      TestStructureSelector.select({
        files: ["Second.ts", "index.ts", "README.md", "First.ts"],
        declarations: { First: {}, Second: {} },
        equals,
      }),
      ["Second", "First"],
    );
    assert.throws(
      () =>
        TestStructureSelector.select({
          files: ["Missing.ts"],
          declarations: {},
          equals,
        }),
      { message: "@typia/template does not export Missing" },
    );
    assert.throws(
      () =>
        TestStructureSelector.select({
          files: ["Inherited.ts"],
          declarations: Object.create({ Inherited: {} }),
          equals,
        }),
      { message: "@typia/template does not export Inherited" },
    );
    assert.deepEqual(
      TestStructureSelector.select({
        files: ["toString.ts", "constructor.ts", "__proto__.ts"],
        declarations: { toString: {}, constructor: {}, ["__proto__"]: {} },
        equals,
      }),
      ["toString", "constructor", "__proto__"],
    );
    assert.deepEqual(
      TestStructureSelector.select({
        files: ["Own.ts"],
        declarations: {
          Own: Object.create({
            JSONABLE: false,
            ADDABLE: false,
            SCHEMA_EQUALS: false,
          }),
        },
        equals,
      }),
      ["Own"],
    );
    assert.throws(
      () =>
        TestStructureSelector.select({
          files: ["toString.ts"],
          declarations: {},
          equals,
        }),
      { message: "@typia/template does not export toString" },
    );
  }
};
