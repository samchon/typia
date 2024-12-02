import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { Writable } from "../../../typings/Writable";

export const iterate_metadata_coalesce = (props: {
  metadata: Metadata;
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
