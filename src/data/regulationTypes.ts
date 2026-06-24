/** Shared types for system building-code / regulation lists. */
export interface RegLink {
  text: string;
  href: string;
}

export interface Regulation {
  /** Short topic label, e.g. "Attic access". */
  title: string;
  /** Code reference, e.g. "R807.1" or "210.52(A)(1)". */
  code: string;
  /** The full code text / quotation. */
  body: string;
  /** Related references linked inline where the phrase appears in `body`. */
  links?: RegLink[];
}
