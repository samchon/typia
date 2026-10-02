import { TestValidator } from "@nestia/e2e";
import { OpenApiV3 } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies the OpenAPI 3.0 downgrade keeps a boolean's declared keywords.
 *
 * The downgrader rebuilt a boolean as a bare `{ "type": "boolean" }`, dropping
 * its `default` (and every other keyword) while number and string carried
 * theirs through. So `boolean & Default<true>` emitted `default: true` under
 * "3.1" but lost it under "3.0", contradicting
 * `OpenApiV3.IJsonSchema.IBoolean`, which declares `default`. This pins the
 * boolean branch against the keys that type allows, and against the 3.1 form it
 * must agree with.
 *
 * 1. Emit a bare `boolean & Default<true>` under "3.1" and "3.0" and assert both
 *    carry `default: true`.
 * 2. Emit an object whose boolean properties carry `default`, title, description,
 *    and `@deprecated`, and assert the 3.0 component keeps them while a
 *    keyword-less boolean stays a bare `{ type: "boolean" }`.
 * 3. Assert the 3.0 components validate as a legal `OpenApiV3.IComponents`, so no
 *    key outside the declared boolean type leaked in.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that native Boolean schemas preserve defaults, prose/title/deprecated metadata and keyword-free controls in both dialects.
 * @evidence contracts/testing.md#independent-expectations Authored complete objects provide independent true/false default and keyword expectations; generated validateEquals against OpenApiV3.IComponents is a complementary shared-producer shape check.
 * @evidence contracts/testing.md#distinguishing-cases Scalar true-default 3.1/3.0, object false-default annotations and plain Boolean control retain all comparisons and the public component validator.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schemas_v3_0_boolean_default in test-typia-schema start. Actual typia.json calls and any complementary generated validator are rewritten in the suite project; the emitted results are evaluated and consumed in the existing process.
 * @evidence contracts/e2e.md#necessary-boundary Native Boolean branch conversion must retain source tags/comments through 3.0 schema emission. Direct converter/writer unit calls cannot establish actual TypeScript call/signature resolution and evaluated public schema assembly together.
 * @evidence contracts/e2e.md#shared-execution All declared variants join the existing ttsx schema-suite project and process. Siblings reuse the content-keyed native plugin artifact; the case adds no independent compiler launch or install per type/dialect.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Generated collections/applications and conversion projections are invocation-local; declarations remain immutable. ttsc owns content-keyed artifact invalidation and the suite owns process termination. No cold-cache or installation transition is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Scalar true-default 3.1/3.0, object false-default annotations and plain Boolean control retain all comparisons and the public component validator. Every original producer call, conversion and assertion remains enrolled under the same exported name; no meaningfully different dialect or graph consumer was deleted.
 */
export const test_json_schemas_v3_0_boolean_default = (): void => {
  const emended = typia.json.schemas<[boolean & tags.Default<true>], "3.1">();
  const downgraded = typia.json.schemas<
    [boolean & tags.Default<true>],
    "3.0"
  >();
  TestEquality.equals("version", downgraded.version, "3.0");
  // The 3.1 form already carried the keyword; the downgrade must not diverge.
  TestEquality.equals("3.1 boolean default", clean(emended.schemas[0]), {
    type: "boolean",
    default: true,
  });
  TestEquality.equals("3.0 boolean default", clean(downgraded.schemas[0]), {
    type: "boolean",
    default: true,
  });

  interface IFlags {
    /**
     * Whether the feature is enabled.
     *
     * @deprecated
     *
     * @title Enabled
     */
    enabled: boolean & tags.Default<false>;
    plain: boolean;
  }
  const object = typia.json.schemas<[IFlags], "3.0">();
  const flags = clean(object.components).schemas
    ?.IFlags as unknown as OpenApiV3.IJsonSchema.IObject;
  TestEquality.equals(
    "embedded boolean keeps keywords",
    flags.properties?.enabled,
    {
      type: "boolean",
      title: "Enabled",
      description: "Whether the feature is enabled.",
      default: false,
      deprecated: true,
    },
  );
  // Boundary: a boolean without a keyword stays a bare `{ type: "boolean" }`.
  TestEquality.equals(
    "keyword-less boolean stays bare",
    flags.properties?.plain,
    {
      type: "boolean",
    },
  );

  // The downgrade added no key the declared 3.0 boolean type disallows.
  TestValidator.predicate(
    "components validate against OpenApiV3.IComponents",
    typia.validateEquals<OpenApiV3.IComponents>(clean(object.components))
      .success,
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
