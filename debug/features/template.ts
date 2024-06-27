import fs from "fs";
import typia, { tags } from "typia";

interface Something {
  pure: `${number}/${number}` | `${string}-${string}`;
  sole: `${number}/${number}` & tags.JsonSchemaPlugin<{ "x-typia-sole": true }>;
  union:
    | (`${number}/${number}` &
        tags.JsonSchemaPlugin<{ "x-typia-something": true }>)
    | (`${string}-${string}` &
        tags.JsonSchemaPlugin<{ "x-typia-nothing": false }>);
  mixed:
    | `${number}/${number}`
    | `${string}-${string}`
    | (`${string}||${number}` &
        tags.JsonSchemaPlugin<{ "x-typia-something": true }>);
  boolean_and_number_and_template: boolean | number | `prefix_${string}`;
}

try {
  fs.mkdirSync("assets");
} catch {}
fs.writeFileSync(
  "assets/template.is.ts",
  typia.createIs<Something>().toString(),
  "utf8",
);
fs.writeFileSync(
  "assets/template.metadata.json",
  JSON.stringify(typia.reflect.metadata<[Something]>(), null, 2),
  "utf8",
);
fs.writeFileSync(
  "assets/template.schema.json",
  JSON.stringify(typia.json.application<[Something]>(), null, 2),
  "utf8",
);
