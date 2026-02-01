//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { _Get_root } from "../internal/Global";

/**
 * Get unique identifier.
 *
 * @param obj Target object.
 * @return The identifier number.
 */
export function get_uid(obj: object | null | undefined): number {
  // NO UID EXISTS, THEN ISSUE ONE.
  if (obj instanceof Object) {
    if (obj.hasOwnProperty("__get_m_iUID") === false) {
      const uid: number = ++_Get_root().__s_iUID;
      Object.defineProperty(obj, "__get_m_iUID", {
        value: function (): number {
          return uid;
        },
      });
    }

    // RETURNS
    return (obj as IObject).__get_m_iUID();
  } else if (obj === undefined) return -1;
  // is null
  else return 0;
}

interface IObject {
  readonly __get_m_iUID: () => number;
}
