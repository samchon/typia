// separate-statement default export of a field-copy class
class Note {
  text!: string;
  show(): string {
    return this.text;
  }
}
export default Note;
