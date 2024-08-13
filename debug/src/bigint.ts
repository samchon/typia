import typia, { IJsonApplication, tags } from "typia";

import { IMetadataApplication } from "typia/lib/schemas/metadata/IMetadataApplication";
import { MetadataApplication } from "typia/lib/schemas/metadata/MetadataApplication";

import { JsonApplicationProgrammer } from "typia/lib/programmers/json/JsonApplicationProgrammer";

const raw: IMetadataApplication =
  typia.reflect.metadata<
    [
      bigint & tags.Minimum<0n> & tags.Maximum<100n> & tags.MultipleOf<5n>,
      bigint & tags.ExclusiveMinimum<0n> & tags.ExclusiveMaximum<100n>,
    ]
  >();
const app: MetadataApplication = MetadataApplication.from(raw);
const json: IJsonApplication = JsonApplicationProgrammer.write("3.1")(
  app.metadatas,
) as IJsonApplication;
console.log(json.schemas);
