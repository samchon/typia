import { IMetadata } from "./IMetadata";

export interface IMetadataTupleType {
  name: string;
  elements: IMetadata[];

  index: number | null;
  recursive: boolean;
  nullables: boolean[];
}
