import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";

/**
 * @internal
 */
export const application_plugin = <Schema extends object>(props: {
  schema: Schema;
  tags: IMetadataTypeTag[][];
}): Schema[] => {
  const plugins: IMetadataTypeTag[][] = props.tags
    .map((row) => row.filter((t) => t.schema !== undefined))
    .filter((row) => row.length !== 0);
  if (plugins.length === 0) return [props.schema];
  return plugins.map((row) => {
    const base: Schema = { ...props.schema };
    for (const tag of row) Object.assign(base, tag.schema);
    return base;
  });
};
