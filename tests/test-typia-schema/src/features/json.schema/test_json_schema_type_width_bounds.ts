import { TestValidator } from "@nestia/e2e";
import { OpenApiValidator } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies the schema a `Type<...>` tag emits carries the range its validator
 * enforces.
 *
 * The width used to live only in the tag's runtime check. `Type<"int8">`
 * published `{ "type": "integer" }` and enforced `[-128, 127]`, so every
 * consumer of the emitted schema — an LLM structured-output endpoint, a
 * generated SDK, an Ajv check — was told a range typia itself narrowed
 * (#2351).
 *
 * Publishing it required the tag merge to intersect rather than overwrite:
 * `Type<"int32"> & Maximum<10>` has two tags contributing a `maximum`, and a
 * blind overwrite would have emitted whichever came last. Both directions are
 * asserted, because a merge that simply imposed the width would be a worse
 * regression than the gap it closes.
 *
 * 1. Require each width to appear in the emitted schema, exactly.
 * 2. Require a narrower declared bound to win, and a wider one to be narrowed.
 * 3. Require a redundant bound to be dropped rather than published beside the
 *    binding one.
 * 4. Require `@typia/utils` to accept and reject the boundary the same way the
 *    generated validator does.
 */
export const test_json_schema_type_width_bounds = (): void => {
  const numeric = (schema: unknown): Record<string, unknown> => {
    const { type, minimum, maximum, exclusiveMinimum, exclusiveMaximum } =
      schema as Record<string, unknown>;
    // Every field is read through `?? null`, so a bound the emitter failed to
    // produce compares as absent instead of being dropped from the comparison.
    return {
      type: type ?? null,
      minimum: minimum ?? null,
      maximum: maximum ?? null,
      exclusiveMinimum: exclusiveMinimum ?? null,
      exclusiveMaximum: exclusiveMaximum ?? null,
    };
  };
  const bounded = (
    type: string,
    minimum: number | null,
    maximum: number | null,
  ): Record<string, unknown> => ({
    type,
    minimum,
    maximum,
    exclusiveMinimum: null,
    exclusiveMaximum: null,
  });

  //----
  // 1. every width, exactly
  //----
  TestValidator.equals(
    "int8",
    numeric(typia.json.schema<number & tags.Type<"int8">>().schema),
    bounded("integer", -128, 127),
  );
  TestValidator.equals(
    "uint8",
    numeric(typia.json.schema<number & tags.Type<"uint8">>().schema),
    bounded("integer", 0, 255),
  );
  TestValidator.equals(
    "int16",
    numeric(typia.json.schema<number & tags.Type<"int16">>().schema),
    bounded("integer", -32768, 32767),
  );
  TestValidator.equals(
    "uint16",
    numeric(typia.json.schema<number & tags.Type<"uint16">>().schema),
    bounded("integer", 0, 65535),
  );
  TestValidator.equals(
    "int32",
    numeric(typia.json.schema<number & tags.Type<"int32">>().schema),
    bounded("integer", -2147483648, 2147483647),
  );
  TestValidator.equals(
    "uint32",
    numeric(typia.json.schema<number & tags.Type<"uint32">>().schema),
    bounded("integer", 0, 4294967295),
  );
  TestValidator.equals(
    "float",
    numeric(typia.json.schema<number & tags.Type<"float">>().schema),
    bounded("number", -3.4028235e38, 3.4028235e38),
  );

  // The 64-bit maxima have no exact JSON number, so the schema spells each as
  // the double it rounds to. That is not a rounding error to be fixed: it is
  // exactly the value the `number` path accepts, because `_isTypeInt64`'s own
  // maximum rounds to the same double. Schema and validator still agree.
  TestValidator.equals(
    "int64 rounds to the value the number path accepts",
    numeric(typia.json.schema<number & tags.Type<"int64">>().schema),
    bounded("integer", -(2 ** 63), 2 ** 63),
  );
  TestValidator.equals(
    "uint64 rounds to the value the number path accepts",
    numeric(typia.json.schema<number & tags.Type<"uint64">>().schema),
    bounded("integer", 0, 2 ** 64),
  );
  TestValidator.equals(
    "the rounded int64 bound is what the validator accepts",
    [
      typia.is<number & tags.Type<"int64">>(2 ** 63),
      typia.is<number & tags.Type<"int64">>(2 ** 64),
    ],
    [true, false],
  );

  //----
  // 2. the merge intersects, in both directions
  //----
  TestValidator.equals(
    "a narrower declared bound wins",
    numeric(
      typia.json.schema<number & tags.Type<"int32"> & tags.Maximum<10>>()
        .schema,
    ),
    bounded("integer", -2147483648, 10),
  );
  TestValidator.equals(
    "a wider declared bound is narrowed to the width",
    numeric(
      typia.json.schema<number & tags.Type<"uint8"> & tags.Maximum<10000>>()
        .schema,
    ),
    bounded("integer", 0, 255),
  );
  TestValidator.equals(
    "a narrower declared minimum wins",
    numeric(
      typia.json.schema<number & tags.Type<"int32"> & tags.Minimum<-5>>()
        .schema,
    ),
    bounded("integer", -5, 2147483647),
  );

  //----
  // 3. a redundant bound is dropped, not published beside the binding one
  //----
  TestValidator.equals(
    "an exclusive bound replaces the looser inclusive width",
    numeric(
      typia.json.schema<
        number & tags.Type<"uint32"> & tags.ExclusiveMaximum<150>
      >().schema,
    ),
    {
      type: "integer",
      minimum: 0,
      maximum: null,
      exclusiveMinimum: null,
      exclusiveMaximum: 150,
    },
  );

  //----
  // 4. the shared validator reads the published schema the way typia does
  //----
  const schema = typia.json.schema<number & tags.Type<"int8">>().schema;
  for (const value of [-129, -128, 0, 127, 128]) {
    TestValidator.equals(
      `OpenAPI parity for int8 at ${value}`,
      OpenApiValidator.validate({
        components: {},
        schema,
        value,
        required: true,
      }).success,
      typia.is<number & tags.Type<"int8">>(value),
    );
  }
};
