//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IPointer } from "../../../functional/IPointer";
import { IForwardIterator } from "../../../iterator/IForwardIterator";

export interface IInsert<
  Iterator extends IForwardIterator<IPointer.ValueType<Iterator>, Iterator>,
> {
  insert(it: Iterator, value: IPointer.ValueType<Iterator>): Iterator;
}
