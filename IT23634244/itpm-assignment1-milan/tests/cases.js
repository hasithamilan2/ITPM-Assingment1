export const cases = [
  // ---------------- POSITIVE FUNCTIONAL (24) ----------------
  { id: "Pos_Fun_0001", type: "positive", input: "mama paadam karanavaa", expectedText: "මම පාඩම් කරනවා" },
  { id: "Pos_Fun_0002", type: "positive", input: "oyaa monavadha karanne?", expectedText: "ඔයා මොනවද කරන්නේ?" },
  { id: "Pos_Fun_0003", type: "positive", input: "vahaama enna.", expectedText: "වහාම එන්න." },
  { id: "Pos_Fun_0004", type: "positive", input: "mama ehema karannee naehae.", expectedText: "මම එහෙම කරන්නේ නැහැ." },
  { id: "Pos_Fun_0005", type: "positive", input: "karuNaakaralaa mata podi udhavvak karanna puLuvandha?", expectedText: "කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?" },
  { id: "Pos_Fun_0006", type: "positive", input: "mama iiyee gedhara giyaa.", expectedText: "මම ඊයේ ගෙදර ගියා." },
  { id: "Pos_Fun_0007", type: "positive", input: "mama dhaen vaeda karanavaa.", expectedText: "මම දැන් වැඩ කරනවා." },
  { id: "Pos_Fun_0008", type: "positive", input: "mama heta enavaa.", expectedText: "මම හෙට එනවා." },
  { id: "Pos_Fun_0009", type: "positive", input: "api yamu.", expectedText: "අපි යමු." },
  { id: "Pos_Fun_0010", type: "positive", input: "Zoom meeting එකක් තියෙන්නේ.", expectedText: "Zoom meeting එකක් තියෙන්නේ." },
  { id: "Pos_Fun_0011", type: "positive", input: "mamapansalyanavaa", expectedText: "මමපන්සල්යනවා" },
  { id: "Pos_Fun_0012", type: "positive", input: "hari hari", expectedText: "හරි හරි" },
  { id: "Pos_Fun_0013", type: "positive", input: "Lamayi school yannee vaeen ekee.", expectedText: "ළමයි school යන්නේ වෑන් එකේ." },
  { id: "Pos_Fun_0014", type: "positive", input: "mata Rs. 5343 gevanna thiyenavaa.", expectedText: "මට Rs. 5343 ගෙවන්න තියෙනවා." },
  { id: "Pos_Fun_0015", type: "positive", input: "mama gedhara yanavaa.\noyaa enavadha?", expectedText: "මම ගෙදර යනවා.\nඔයා එනවද?" },
  { id: "Pos_Fun_0016", type: "positive", input: "ela machan!", expectedText: "එල මචන්!" },
  { id: "Pos_Fun_0017", type: "positive", input: "meeting eka 7.30 AM thiyenavaa.", expectedText: "meeting එක 7.30 AM තියෙනවා." },
  {
    id: "Pos_Fun_0018",
    type: "positive",
    input:
      "avasaan vasarata adhaalava pavathii aethi avasthaavan saha paalu parisaraya hethuven nagarika janathaava athara vaahana pravaahanaya adu vii aethi athara, raajaye seavaa saha vyavasaaya kriyaakaariyathvaya visaalavasayen baadhaavata lak vii thibunaa. meya ratea aarThika pravardhanayata thadabala adhahasak lesa visheshagnayan pennvaa dhennaa athara, isarahata nivaradhi kriyaamaarga gena aethi kiyala visvaasa karayi.ema nisa mema vasare kisidhu prashnayak aethi nove.",
    expectedText: "අවසාන් වසරට අදාලව",
  },
  { id: "Pos_Fun_0019", type: "positive", input: "25/12/2025", expectedText: "25/12/2025" },
  { id: "Pos_Fun_0020", type: "positive", input: "5/21/2026", expectedText: "5/21/2026" },
  { id: "Pos_Fun_0021", type: "positive", input: "mata kg 5k oonee.", expectedText: "මට kg 5ක් ඕනේ." },
  { id: "Pos_Fun_0022", type: "positive", input: "mage NIC eka and ID eka dhenna.", expectedText: "mage NIC එක and ID එක දෙන්න." },
  { id: "Pos_Fun_0023", type: "positive", input: "eeka dhenna.", expectedText: "ඒක දෙන්න." },
  { id: "Pos_Fun_0024", type: "positive", input: "oya enavaanam mama balan innavaa.", expectedText: "ඔය එනවානම්" },

  // ---------------- NEGATIVE FUNCTIONAL (10) ----------------
  // These should FAIL intentionally in the report
  { id: "Neg_Fun_0001", type: "negative", input: "matapaankannaoonee", expectedText: "මටපාන්කන්නඕනේ" },
  { id: "Neg_Fun_0002", type: "negative", input: "mamapansalyanavaa", expectedText: "මමපන්සල්යනවා" },
  { id: "Neg_Fun_0003", type: "negative", input: "mama pan@sal yanavaa.", expectedText: "මම පන්@සල් යනවා." },
  { id: "Neg_Fun_0004", type: "negative", input: "mama pansal  yaaaanavaa.", expectedText: "මම පන්සල්  යාආනවා." },
  { id: "Neg_Fun_0005", type: "negative", input: "mama 2026-05-21wenida enavaa.", expectedText: "මම 2026-05-21wඑනිඩ එනවා." },
  { id: "Neg_Fun_0006", type: "negative", input: "mama pan sal yanavaa.", expectedText: "මම පන් සල් යනවා." },
  { id: "Neg_Fun_0007", type: "negative", input: "mama pan\nsal yanavaa.", expectedText: "මම පන්\nසල් යනවා." },
  { id: "Neg_Fun_0008", type: "negative", input: "mageIDEka denna.", expectedText: "මගෙඉඬෙක ඩෙන්න." },
  { id: "Neg_Fun_0009", type: "negative", input: "mama පන්සල්  yanavaa", expectedText: "Warning: Sinhala characters are not allowed in Singlish input" },
  { id: "Neg_Fun_0010", type: "negative", input: "mama URLeka open karanna try karaa.", expectedText: "මම උRළෙක open කරන්න try කරා." },

  // ---------------- UI TEST (1) ----------------
  { id: "Pos_UI_0001", type: "ui", input: "mama pansal yanavaa.", expectedText: "මම පන්සල් යනවා." },
];