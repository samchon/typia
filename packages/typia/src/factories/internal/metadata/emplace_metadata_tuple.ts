import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataTupleType } from "../../../schemas/metadata/MetadataTupleType";

import { Writable } from "../../../typings/Writable";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_tuple = (
  props: IMetadataIteratorProps<ts.TupleType>,
): MetadataTupleType => {
  // CHECK EXISTENCE
  const [tuple, newbie, closure] = props.collection.emplaceTuple(
    props.checker,
    props.type,
  );
  ArrayUtil.add(tuple.nullables, props.metadata.nullable);
  if (newbie === false) return tuple;

  // CONSTRUCT ELEMENT TYPES
  const flagList: readonly ts.ElementFlags[] =
    props.type.elementFlags ??
    (props.type.target as ts.TupleType)?.elementFlags ??
    [];
  const elements: Metadata[] = props.checker
    .getTypeArguments(props.type as ts.TypeReference)
    .map((elem, i) => {
      const child: Metadata = explore_metadata({
        ...props,
        type: elem,
        explore: {
          ...props.explore,
          nested: tuple,
          aliased: false,
          escaped: false,
        },
        intersected: false,
      });

      // CHECK OPTIONAL
      const flag: ts.ElementFlags | undefined = flagList[i];
      if (flag === ts.ElementFlags.Optional) Writable(child).optional = true;

      // REST TYPE
      if (flag !== ts.ElementFlags.Rest) return child;
      const wrapper: Metadata = Metadata.initialize();
      Writable(wrapper).rest = child;
      return wrapper;
    });
  closure(elements);

  return tuple;
};
