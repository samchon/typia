import ts from "typescript";

import { MetadataSchema } from "../../../schemas/metadata/MetadataSchema";
import { Writable } from "../../../typings/Writable";

export const iterate_metadata_coalesce = (props: {
  metadata: MetadataSchema;
  type: ts.Type;
}): boolean => {
  const filter = (flag: ts.TypeFlags) => (props.type.getFlags() & flag) !== 0;
  if (filter(ts.TypeFlags.Unknown) || filter(ts.TypeFlags.Any)) {
    Writable(props.metadata).any = true;
    return true;
  } else if (filter(ts.TypeFlags.Null)) {
    Writable(props.metadata).nullable = true;
    return true;
  } else if (
    filter(ts.TypeFlags.Undefined) ||
    filter(ts.TypeFlags.Never) ||
    filter(ts.TypeFlags.Void) ||
    filter(ts.TypeFlags.VoidLike)
  ) {
    Writable(props.metadata).required = false;
    return true;
  }
  return false;
};
