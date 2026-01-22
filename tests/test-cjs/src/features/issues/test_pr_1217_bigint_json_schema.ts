import typia, { IJsonSchemaCollection, tags } from "typia";
import { JsonSchemasProgrammer } from "typia/lib/programmers/json/JsonSchemasProgrammer";
import { IMetadataApplication } from "typia/lib/schemas/metadata/IMetadataApplication";
import { MetadataApplication } from "typia/lib/schemas/metadata/MetadataApplication";

import { TestValidator } from "../../helpers/TestValidator";

export const test_pr_1217_bigint_json_schema = (): void => {
  const raw: IMetadataApplication =
    typia.reflect.metadata<
      [
        bigint & tags.Minimum<0n> & tags.Maximum<100n> & tags.MultipleOf<5n>,
        bigint & tags.ExclusiveMinimum<0n> & tags.ExclusiveMaximum<100n>,
      ]
    >();
  const app: MetadataApplication = MetadataApplication.from(raw);
  const json: IJsonSchemaCollection = JsonSchemasProgrammer.write({
    version: "3.1",
    metadatas: app.metadatas,
  });
  TestValidator.equals("bigint")(json.schemas)([
    {
      type: "integer",
      minimum: 0,
      maximum: 100,
      multipleOf: 5,
    },
    {
      type: "integer",
      exclusiveMinimum: 0,
      exclusiveMaximum: 100,
    },
  ]);
};
