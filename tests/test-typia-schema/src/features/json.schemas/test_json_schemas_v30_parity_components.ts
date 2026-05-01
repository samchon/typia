import { TestValidator } from "@nestia/e2e";
import { OpenApiConverter } from "@typia/utils";
import typia, { tags } from "typia";

export const test_json_schemas_v30_parity_components = (): void => {
  interface INode {
    id: string & tags.Format<"uuid">;
    parent: INode | null;
    children: INode[];
  }
  interface IContainer {
    node: INode | null;
    tuple: [string, number];
    literal: "open" | "closed" | 1 | 2;
  }

  const source = typia.json.schemas<[INode | null, IContainer]>();
  const actual = typia.json.schemas<[INode | null, IContainer], "3.0">();
  const downgraded = OpenApiConverter.downgradeComponents(
    source.components,
    "3.0",
  );
  const expected = source.schemas.map((schema) =>
    OpenApiConverter.downgradeSchema({
      version: "3.0",
      components: source.components,
      schema,
      downgraded,
    }),
  );

  TestValidator.equals("schemas", clean(actual.schemas), clean(expected));
  TestValidator.equals(
    "components",
    clean(actual.components),
    clean(downgraded),
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
