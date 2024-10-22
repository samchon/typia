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
}

const collection = typia.json.schemas<[Something]>();
console.log(JSON.stringify(collection, null, 2));
