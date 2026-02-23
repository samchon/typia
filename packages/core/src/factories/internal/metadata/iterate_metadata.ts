import ts from "typescript";

import { TypeFactory } from "../../TypeFactory";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { iterate_metadata_alias } from "./iterate_metadata_alias";
import { iterate_metadata_array } from "./iterate_metadata_array";
import { iterate_metadata_atomic } from "./iterate_metadata_atomic";
import { iterate_metadata_coalesce } from "./iterate_metadata_coalesce";
import { iterate_metadata_constant } from "./iterate_metadata_constant";
import { iterate_metadata_escape } from "./iterate_metadata_escape";
import { iterate_metadata_function } from "./iterate_metadata_function";
import { iterate_metadata_intersection } from "./iterate_metadata_intersection";
import { iterate_metadata_map } from "./iterate_metadata_map";
import { iterate_metadata_native } from "./iterate_metadata_native";
import { iterate_metadata_object } from "./iterate_metadata_object";
import { iterate_metadata_set } from "./iterate_metadata_set";
import { iterate_metadata_template } from "./iterate_metadata_template";
import { iterate_metadata_tuple } from "./iterate_metadata_tuple";
import { iterate_metadata_union } from "./iterate_metadata_union";

export const iterate_metadata = (props: IMetadataIteratorProps): void => {
  if (props.type.isTypeParameter() === true) {
    props.errors.push({
      name: TypeFactory.getFullName({
        checker: props.checker,
        type: props.type,
      }),
      explore: { ...props.explore },
      messages: ["non-specified generic argument found."],
    });
    return;
  }
  // CHECK SPECIAL CASES
  if (
    (props.explore.aliased !== true && iterate_metadata_alias(props)) ||
    iterate_metadata_intersection(props) ||
    iterate_metadata_union(props) ||
    iterate_metadata_escape(props)
  )
    return;

  // ITERATE CASES
  iterate_metadata_coalesce(props) ||
    iterate_metadata_function(props) ||
    iterate_metadata_constant(props) ||
    iterate_metadata_template(props) ||
    iterate_metadata_atomic(props) ||
    iterate_metadata_tuple(props as IMetadataIteratorProps<ts.TupleType>) ||
    iterate_metadata_array(props) ||
    iterate_metadata_native(props) ||
    iterate_metadata_map(props) ||
    iterate_metadata_set(props) ||
    iterate_metadata_object(props);
};
