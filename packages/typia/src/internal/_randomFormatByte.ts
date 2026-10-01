import { _randomInteger } from "./_randomInteger";
import {
  _ILengthProps,
  _RANDOM_LENGTH_ERROR,
  _randomLengthPick,
  _randomLengthWindow,
} from "./_randomStringLength";
import { __randomBase64 } from "./private/__randomComposition";

/**
 * Generate a Base64 string for the `byte` format at a length the bounds allow.
 *
 * @evidence contracts/common.md#principled-implementation Base64 lengths are multiples of four, so an unconstrained draw spends four to twelve groups, and a constrained one raises the window floor to the first multiple of four it contains and steps by four; an empty window throws. Each character is from the alphabet that the validator allows, so no encoding step is needed and no padding is produced.
 * @evidence contracts/common.md#clear-and-simple-design One function over the shared length window and Base64 helpers.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The length rule is the format's.
 * @evidence contracts/common.md#meaningful-documentation An inline comment explains the grouping.
 */
export const _randomFormatByte = (props?: _ILengthProps): string => {
  // Base64 encodes three bytes as four characters, so a valid length is always
  // a multiple of four; an unconstrained draw spends between four and twelve
  // groups, and a constrained one raises the window to the first multiple it
  // contains and steps by four from there.
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return __randomBase64(
      4 *
        _randomInteger({
          type: "integer",
          minimum: DEFAULT_GROUP_MIN,
          maximum: DEFAULT_GROUP_MAX,
        }),
    );
  const window = _randomLengthWindow(props, { minimum: 0, spread: 16 });
  const low: number = Math.ceil(window.low / 4) * 4;
  if (low > window.high) throw new Error(_RANDOM_LENGTH_ERROR);
  const length: number =
    low +
    4 *
      _randomLengthPick({
        low: 0,
        high: Math.floor((window.high - low) / 4),
      });
  return __randomBase64(length);
};

const DEFAULT_GROUP_MIN = 4;
const DEFAULT_GROUP_MAX = 12;
