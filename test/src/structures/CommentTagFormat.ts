import { Spoiler } from "../helpers/Spoiler";
import { TypeTagFormat } from "./TypeTagFormat";

export interface CommentTagFormat {
  /**
   * @format byte
   */
  byte: string;

  /**
   * @format password
   */
  password: string;

  /**
   * @format regex
   */
  regex: string;

  /**
   * @format uuid
   */
  uuid: string;

  /**
   * @format email
   */
  email: string;

  /**
   * @format hostname
   */
  hostname: string;

  /**
   * @format idn-email
   */
  idnEmail: string;

  /**
   * @format idn-hostname
   */
  idnHostname: string;

  /**
   * @format iri
   */
  iri: string;

  /**
   * @format iri-reference
   */
  iriReference: string;

  /**
   * @format ipv4
   */
  ipv4: string;

  /**
   * @format ipv6
   */
  ipv6: string;

  /**
   * @format uri
   */
  uri: string;

  /**
   * @format uri-reference
   */
  uriReference: string;

  /**
   * @format uri-template
   */
  uriTemplate: string;

  /**
   * @format url
   */
  url: string;

  /**
   * @format date-time
   */
  datetime: string;

  /**
   * @format date
   */
  date: string;

  /**
   * @format time
   */
  time: string;

  /**
   * @format duration
   */
  duration: string;

  /**
   * @format json-pointer
   */
  jsonPointer: string;

  /**
   * @format relative-json-pointer
   */
  relativeJsonPointer: string;
}
export namespace CommentTagFormat {
  export function generate(): CommentTagFormat {
    return TypeTagFormat.generate();
  }

  export const SPOILERS: Spoiler<CommentTagFormat>[] = TypeTagFormat.SPOILERS;
}
