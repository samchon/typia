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
 * @evidence contracts/testing.md#behavioral-verification typia.json.schemas is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (version; 3.1 boolean default; 3.0 boolean default; embedded boolean keeps keywords; keyword-less boolean stays bare; components validate against OpenApiV3.IComponents). The case documents its purpose as: Verifies the OpenAPI 3.0 downgrade keeps a boolean's declared keywords.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The downgrader rebuilt a boolean as a bare `{ "type": "boolean" }`, dropping its `default` (and every other keyword) while number and string carried theirs through. So `boolean & Default<true>` emitted `default: true` under "3.1" but lost it under "3.0", contradicting `OpenApiV3.IJsonSchema.IBoolean`, which declares `default`. This pins the boolean branch against the keys that type allows, and against the 3.1 form it must agree with. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (version; 3.1 boolean default; 3.0 boolean default; embedded boolean keeps keywords; keyword-less boolean stays bare; components validate against OpenApiV3.IComponents) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schemas_v3_0_boolean_default is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
