import { IMetadataSchema } from "./IMetadataSchema";

export interface IMetadataComponents {
  objects: IMetadataSchema.IObjectType[];
  aliases: IMetadataSchema.IAliasType[];
  arrays: IMetadataSchema.IArrayType[];
  tuples: IMetadataSchema.ITupleType[];
}
