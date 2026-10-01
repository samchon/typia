import { _randomInteger } from "../_randomInteger";

/**
 * Bounds of a random instant, in milliseconds since the epoch.
 *
 * @evidence contracts/common.md#principled-implementation Two optional millisecond numbers bound an instant, either of which may be open.
 * @evidence contracts/common.md#clear-and-simple-design Two fields.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
 * @evidence contracts/common.md#meaningful-documentation A comment states the unit and the meaning of each side.
 */
export interface __IEpochProps {
  minimum?: number;
  maximum?: number;
}

/**
 * Draws an epoch millisecond inside the requested bounds.
 *
 * Shared by the `date` and `date-time` generators, which had the same bound
 * expression written twice: `props?.maximum ?? props?.minimum === undefined`
 * parses as `props?.maximum ?? (props?.minimum === undefined)` because `??`
 * binds looser than `===`, so any supplied `maximum` made the condition truthy
 * and was replaced by `Date.now()`, while `maximum: 0` fell through to
 * `undefined + one year` and produced `NaN` (issue #2287). Keeping the
 * resolution in one place is what stops the two copies from drifting again.
 *
 * With no bound at all the window ends at the present instant; with only a
 * lower bound it spans one year from there.
 *
 * @evidence contracts/common.md#principled-implementation The upper bound defaults to now when there is no bound and to one year after the lower bound when only that is given, resolved in one place so the date and date-time generators cannot disagree, and an explicit maximum, including zero, is honored.
 * @evidence contracts/common.md#clear-and-simple-design One function.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The default window is stated and the precedence bug that once made the maximum ignored is the reason for sharing the code.
 * @evidence contracts/common.md#meaningful-documentation The doc states the defaults and the shared use.
 */
export const __randomEpoch = (props?: __IEpochProps): number => {
  const minimum: number = props?.minimum ?? 0;
  const maximum: number =
    props?.maximum ??
    (props?.minimum === undefined ? Date.now() : props.minimum + YEAR);
  return _randomInteger({
    type: "integer",
    minimum,
    maximum,
  });
};

const YEAR = 365 * 24 * 60 * 60 * 1_000;
