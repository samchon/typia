import { IMetadata } from "./IMetadata";

export interface IMetadataArrayType {
  name: string;
  value: IMetadata;

  nullables: boolean[];
  recursive: boolean;
  index: number | null;
}
