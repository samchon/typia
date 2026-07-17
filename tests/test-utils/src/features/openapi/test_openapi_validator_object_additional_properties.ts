import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiValidator } from "@typia/utils";

/**
 * Verifies `additionalProperties: true` opens an object against `equals`.
 *
 * Whether a stray property is superfluous is a question only a closed object
 * answers. An `additionalProperties` that opens the object — `true` for any
 * value, or a schema constraining it — declares undeclared keys to be
 * legitimate members, so `equals` has nothing left to decide. The validator
 * tested `typeof additionalProperties !== "object"`, which reads whether the
 * keyword is a schema but never reads the boolean. `true` was therefore no
 * different from `false` or from an absent keyword, and `equals: true` closed
 * an object that had explicitly declared itself open.
 *
 * The case that pins this is a document mixing an open and a closed object: no
 * value of a single global option can answer both halves, so the keyword must
 * be read per schema. Expectations come from `ILlmSchema.IObject`'s published
 * three-way contract and from `typia.equals`, which accepts an extra key on a
 * type with an index signature and rejects one on a type without.
 *
 * 1. Cross every `additionalProperties` form with both `equals` values.
 * 2. Require a mixed document to answer both objects correctly at once.
 * 3. Pin the reported path so a rejection stays diagnosable.
 */
export const test_openapi_validator_object_additional_properties = (): void => {
  const build = (
    additionalProperties?: OpenApi.IJsonSchema.IObject["additionalProperties"],
  ): OpenApi.IJsonSchema.IObject => ({
    type: "object",
    properties: { a: { type: "string" } },
    required: ["a"],
    ...(additionalProperties === undefined ? {} : { additionalProperties }),
  });

  const clean = { a: "value" };
  const extra = { a: "value", b: 1 };

  for (const equals of [false, true]) {
    const label = (text: string): string => `equals: ${equals} - ${text}`;

    // An open object never has a superfluous property. This is the row the
    // unread boolean got wrong: `true` closed under `equals: true`.
    expect(
      label("open accepts a clean value"),
      build(true),
      clean,
      equals,
      true,
    );
    expect(
      label("open accepts an extra property"),
      build(true),
      extra,
      equals,
      true,
    );

    // A schema value opens the object too, and constrains what may enter it.
    expect(
      label("constrained accepts a matching extra property"),
      build({ type: "number" }),
      extra,
      equals,
      true,
    );
    expect(
      label("constrained rejects a mismatched extra property"),
      build({ type: "number" }),
      { a: "value", b: "not a number" },
      equals,
      false,
    );

    // A closed object is the only one `equals` speaks for, and an absent
    // keyword is closed for this purpose.
    expect(
      label("closed accepts a clean value"),
      build(false),
      clean,
      equals,
      true,
    );
    expect(
      label("closed leaves an extra property to equals"),
      build(false),
      extra,
      equals,
      equals === false,
    );
    expect(label("absent accepts a clean value"), build(), clean, equals, true);
    expect(
      label("absent leaves an extra property to equals"),
      build(),
      extra,
      equals,
      equals === false,
    );
  }

  // The mixed document. One schema carries an open and a closed object, so a
  // global option cannot answer both: under `equals: true` the open object must
  // still accept while the closed one rejects.
  const mixed: OpenApi.IJsonSchema.IObject = {
    type: "object",
    properties: { open: build(true), closed: build(false) },
    required: ["open", "closed"],
    additionalProperties: false,
  };
  expect(
    "mixed document allows an extra property on its open object",
    mixed,
    { open: extra, closed: clean },
    true,
    true,
  );
  expect(
    "mixed document rejects an extra property on its closed object",
    mixed,
    { open: clean, closed: extra },
    true,
    false,
  );
  expect(
    "mixed document separates its two objects at once",
    mixed,
    { open: extra, closed: extra },
    true,
    false,
  );

  // `null` sits outside the published `boolean | IJsonSchema` type, but this
  // validator guards against it, so pin it: it constrains nothing and so cannot
  // open the object. `OpenApiTypeCheckerBase.coverObject` reads it the same way.
  const nulled = build(null as unknown as false);
  expect("a null keyword accepts a clean value", nulled, clean, true, true);
  expect("a null keyword does not open the object", nulled, extra, true, false);
  expect("a null keyword is still lenient", nulled, extra, false, true);

  // The rejection names the offending property, not the object holding it.
  const validation = OpenApiValidator.validate({
    components: {},
    schema: mixed,
    value: { open: extra, closed: extra },
    required: true,
    equals: true,
  });
  TestValidator.equals(
    "the mixed document reports only the closed object's property",
    validation.success === false ? validation.errors.map((e) => e.path) : [],
    ["$input.closed.b"],
  );
};

const expect = (
  label: string,
  schema: OpenApi.IJsonSchema,
  value: unknown,
  equals: boolean,
  success: boolean,
): void =>
  TestValidator.equals(
    label,
    OpenApiValidator.validate({
      components: {},
      schema,
      value,
      required: true,
      equals,
    }).success,
    success,
  );
