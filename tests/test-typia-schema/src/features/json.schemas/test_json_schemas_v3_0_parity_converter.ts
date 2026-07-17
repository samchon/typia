import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
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

  TestValidator.equals("version", actual.version, "3.0");
  TestValidator.equals(
    "downgraded components",
    clean(actual.components),
    clean(downgraded),
  );
  TestValidator.equals(
    "downgraded schemas",
    clean(actual.schemas),
    clean(expectedSchemas),
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
