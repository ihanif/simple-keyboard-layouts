import { LayoutItem } from "../interfaces";

/**
 * Layout: Pashto Phonetic
 * Source: Hanif Rahman (https://github.com/ihanif)
 */
export default <LayoutItem>{
  layout: {
    default: [
      "` \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {bksp}",
      "{tab} \u0642 \u0648 \u0639 \u0631 \u062A \u06D2 \u0626 \u064A \u06C1 \u067E [ ]",
      "{lock} \u0627 \u0633 \u062F \u0641 \u06AB \u062D \u062C \u06A9 \u0644 \u061B \u060C {enter}",
      "{shift} \u0632 \u0634 \u0686 \u0637 \u0628 \u0646 \u0645 \u06E4 , . / {shift}",
      ".com @ {space}",
    ],
    shift: [
      "~ ! @ # $ \u066A ^ & * ( ) _ + {bksp}",
      "{tab} \u069A \u0624 \u0696 \u0693 \u067C \uFBFD \u06CD \u06D0 \u06C0 \u0685 | { }",
      "{lock} \u0622 \u0635 \u0688 \u060D \u063A \u0681 \u0636 \u062E \u06D4 \u0703 \u05f4 {enter}",
      "{shift} \u0630 \u0698 \u062B \u0638 \u06BA \uFDFA \u0640 < > \u061F {shift}",
      ".com @ {space}",
    ],
  },
};
