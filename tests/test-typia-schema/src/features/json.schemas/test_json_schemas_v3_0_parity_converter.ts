import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies the native "3.0" writer agrees with `@typia/utils`' downgrader.
 *
 * Two owners implement one OpenAPI 3.0 downgrade contract: the Go emitter that
 * `typia.json.*` calls, and `OpenApiConverter` in `@typia/utils`, which the
 * TypeScript implementation of this programmer called directly before the Go
 * port replaced it. The Go transform cannot call into TypeScript, so the pair
 * cannot be collapsed into one owner — this test is what keeps them aligned,
 * and it fails whichever of the two drifts.
 *
 * The fixture exercises every construct the downgrade rewrites rather than a
 * sample, because a parity test whose fixture omits the disputed construct
 * proves nothing about it.
 *
 * 1. Emit the same types under "3.1" and under "3.0".
 * 2. Downgrade the "3.1" collection with `@typia/utils`' converter.
 * 3. Assert the native "3.0" output equals the converter's downgrade.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schemas is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (version; downgraded components; downgraded schemas). The case documents its purpose as: Verifies the native "3.0" writer agrees with `@typia/utils`' downgrader.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Two owners implement one OpenAPI 3.0 downgrade contract: the Go emitter that `typia.json.*` calls, and `OpenApiConverter` in `@typia/utils`, which the TypeScript implementation of this programmer called directly before the Go port replaced it. The Go transform cannot call into TypeScript, so the pair cannot be collapsed into one owner — this test is what keeps them aligned, and it fails whichever of the two drifts. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (version; downgraded components; downgraded schemas) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schemas_v3_0_parity_converter is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schemas_v3_0_parity_converter = (): void => {
  interface IParityChild {
    code: string & tags.MinLength<2> & tags.Pattern<"^[a-z]+$">;
    count: number & tags.Minimum<1> & tags.Maximum<9> & tags.Default<7>;
  }
  interface ICircle {
    kind: "circle";
    radius: number;
  }
  interface ISquare {
    kind: "square";
    side: number;
  }
  interface IParityRoot {
    /** A nullable reference forces an `X.Nullable` companion schema. */
    child: IParityChild | null;
    plain: IParityChild;
    recursive: IParityRoot | null;
    nullableAtomic: string | null;
    nullableArray: (string & tags.Format<"uuid">)[] | null;
    literal: "alpha" | "beta";
    mixedLiteral: 1 | 2 | "three";
    booleanValue: boolean;
    /**
     * A boolean keyword must survive the downgrade in both owners. Rebuilding a
     * boolean as a bare `{ type: "boolean" }` dropped it and drifted the two
     * owners apart wherever a boolean carried one.
     */
    booleanDefault: boolean & tags.Default<true>;
    tuple: [string, number];
    restTuple: [string, ...number[]];
    dictionary: Record<string, number>;
    /** A tagged union keeps its discriminator through the downgrade. */
    shape: ICircle | ISquare;
    /** A nullable tagged union must drop the discriminator. */
    nullableShape: ICircle | ISquare | null;
    /** @deprecated */
    annotated: string & tags.MaxLength<4>;
    unknownValue: unknown;
  }

  const emended = typia.json.schemas<[IParityRoot, IParityChild], "3.1">();
  const actual = typia.json.schemas<[IParityRoot, IParityChild], "3.0">();

  const components: OpenApi.IComponents =
    emended.components as OpenApi.IComponents;
  const downgraded = OpenApiConverter.downgradeComponents(components, "3.0");
  const expectedSchemas = emended.schemas.map((schema) =>
    OpenApiConverter.downgradeSchema({
      version: "3.0",
      components,
      schema: schema as OpenApi.IJsonSchema,
      downgraded,
    }),
  );

  TestEquality.equals("version", actual.version, "3.0");
  TestEquality.equals(
    "downgraded components",
    clean(actual.components),
    clean(downgraded),
  );
  TestEquality.equals(
    "downgraded schemas",
    clean(actual.schemas),
    clean(expectedSchemas),
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
