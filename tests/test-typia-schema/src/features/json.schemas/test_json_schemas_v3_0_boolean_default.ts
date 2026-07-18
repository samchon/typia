import { TestValidator } from "@nestia/e2e";
import { OpenApiV3 } from "@typia/interface";
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
 */
export const test_json_schemas_v3_0_boolean_default = (): void => {
  const emended = typia.json.schemas<[boolean & tags.Default<true>], "3.1">();
  const downgraded = typia.json.schemas<
    [boolean & tags.Default<true>],
    "3.0"
  >();
  TestValidator.equals("version", downgraded.version, "3.0");
  // The 3.1 form already carried the keyword; the downgrade must not diverge.
  TestValidator.equals("3.1 boolean default", clean(emended.schemas[0]), {
    type: "boolean",
    default: true,
  });
  TestValidator.equals("3.0 boolean default", clean(downgraded.schemas[0]), {
    type: "boolean",
    default: true,
  });

  interface IFlags {
    /**
     * Whether the feature is enabled.
     *
     * @deprecated
     * @title Enabled
     */
    enabled: boolean & tags.Default<false>;
    plain: boolean;
  }
  const object = typia.json.schemas<[IFlags], "3.0">();
  const flags = clean(object.components).schemas
    ?.IFlags as unknown as OpenApiV3.IJsonSchema.IObject;
  TestValidator.equals(
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
  TestValidator.equals(
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
