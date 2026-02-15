import ts from "typescript";

import { MetadataSchema } from "../../../schemas/metadata/MetadataSchema";
import { MetadataTupleType } from "../../../schemas/metadata/MetadataTupleType";
import { Writable } from "../../../typings/Writable";
import { ArrayUtil } from "../../../utils/ArrayUtil";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_tuple = (
  props: IMetadataIteratorProps<ts.TupleType>,
): MetadataTupleType => {
  // CHECK EXISTENCE
  const [tuple, newbie, closure] = props.components.emplaceTuple(
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
  const elements: MetadataSchema[] = props.checker
    .getTypeArguments(props.type as ts.TypeReference)
    .map((elem, i) => {
      const child: MetadataSchema = explore_metadata({
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
      const wrapper: MetadataSchema = MetadataSchema.initialize();
      Writable(wrapper).rest = child;
      return wrapper;
    });
  closure(elements);

  return tuple;
};
