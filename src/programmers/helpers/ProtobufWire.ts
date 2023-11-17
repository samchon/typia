export const enum ProtobufWire {
  /**
   * - integers
   * - bool
   * - enum
   */
  VARIANT = 0,

  /**
   * - fixed64
   * - sfixed64
   * - double
   */
  I64 = 1,

  /**
   * - string
   * - bytes
   * - mebedded messages
   * - packed repeated fields
   */
  LEN = 2,

  START_GROUP = 3,

  END_GROUP = 4,

  /**
   * - fixed
   * - sfixed32
   * - float
   */
  I32 = 5,
}
