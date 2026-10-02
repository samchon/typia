import { _ILengthProps, _randomFormatLength } from "./_randomStringLength";
import { __IEpochProps, __randomEpoch } from "./private/__randomEpoch";

/**
 * Generate a `YYYY-MM-DD` date within the epoch bounds. Custom bounds must
 * describe valid Date instants with four-digit ISO years; expanded-year ISO
 * text is outside this fixed-width generator's contract.
 *
 * @evidence contracts/common.md#principled-implementation With valid Date bounds in the four-digit ISO-year range, a date is the first ten characters of a random instant's ISO text; the fixed-length wrapper checks it against the length bounds and throws when no draw fits. Custom out-of-range instants and expanded ISO years are not normalized here.
 * @evidence contracts/common.md#clear-and-simple-design One expression over the epoch drawer and the fixed-length wrapper.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The instant bounds are handled by the shared epoch drawer.
 * @evidence contracts/common.md#meaningful-documentation The doc states that the date is the date part of a random instant within the epoch bounds.
 */
export const _randomFormatDate = (props?: __IEpochProps & _ILengthProps) =>
  _randomFormatLength(props, () =>
    new Date(__randomEpoch(props)).toISOString().substring(0, 10),
  );
