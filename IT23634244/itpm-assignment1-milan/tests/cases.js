// tests/cases.js
export const cases = [
    // ---------------- POSITIVE FUNCTIONAL ----------------
    {
      id: "Pos_Fun_0001",
      type: "normal",
      input: "mama paadam karanavaa",
      expectedText: "මම පාඩම් කරනවා",
    },
    {
      id: "Pos_Fun_0002",
      type: "normal",
      input: "oyaa monavadha karanne?",
      expectedText: "ඔයා මොනවද කරන්නේ?",
    },
    {
      id: "Pos_Fun_0003",
      type: "normal",
      input: "vahaama enna.",
      expectedText: "වහාම එන්න.",
    },
    {
      id: "Pos_Fun_0004",
      type: "normal",
      input: "mama ehema karannee naehae.",
      expectedText: "මම එහෙම කරන්නේ නැහැ.",
    },
    {
      id: "Pos_Fun_0005",
      type: "normal",
      input: "karuNaakaralaa mata podi udhavvak karanna puLuvandha?",
      expectedText: "කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?",
    },
    {
      id: "Pos_Fun_0006",
      type: "normal",
      input: "mama iiyee gedhara giyaa.",
      expectedText: "මම ඊයේ ගෙදර ගියා.",
    },
    {
      id: "Pos_Fun_0007",
      type: "normal",
      input: "mama dhaen vaeda karanavaa.",
      expectedText: "මම දැන් වැඩ කරනවා.",
    },
    {
      id: "Pos_Fun_0008",
      type: "normal",
      input: "mama heta enavaa.",
      expectedText: "මම හෙට එනවා.",
    },
    {
      id: "Pos_Fun_0009",
      type: "normal",
      input: "api yamu.",
      expectedText: "අපි යමු.",
    },
    {
      id: "Pos_Fun_0010",
      type: "normal",
      input: "Zoom meeting එකක් තියෙන්නේ.",
      expectedText: "Zoom meeting එකක් තියෙන්නේ.",
    },
    {
      id: "Pos_Fun_0011",
      type: "normal",
      input: "mamapansalyanavaa",
      expectedText: "මමපන්සල්යනවා",
    },
    {
      id: "Pos_Fun_0012",
      type: "normal",
      input: "hari hari",
      expectedText: "හරි හරි",
    },
    {
      id: "Pos_Fun_0013",
      type: "normal",
      input: "Lamayi school yannee vaeen ekee.",
      expectedText: "ළමයි school යන්නේ වෑන් එකේ.",
    },
    {
      id: "Pos_Fun_0014",
      type: "normal",
      input: "mata Rs. 5343 gevanna thiyenavaa.",
      expectedText: "මට Rs. 5343 ගෙවන්න තියෙනවා.",
    },
    {
      id: "Pos_Fun_0015",
      type: "normal",
      input: "mama gedhara yanavaa.\noyaa enavadha?",
      expectedText: "මම ගෙදර යනවා.\nඔයා එනවද?",
    },
    {
      id: "Pos_Fun_0016",
      type: "normal",
      input: "ela machan!",
      expectedText: "එල මචන්!",
    },
    {
      id: "Pos_Fun_0017",
      type: "normal",
      input: "meeting eka 7.30 AM thiyenavaa.",
      expectedText: "meeting එක 7.30 AM තියෙනවා.",
    },
    {
      id: "Pos_Fun_0018",
      type: "normal",
      input:
        "avasaan vasarata adhaalava pavathii aethi avasthaavan saha paalu parisaraya hethuven nagarika janathaava athara vaahana pravaahanaya adu vii aethi athara, raajaye seavaa saha vyavasaaya kriyaakaariyathvaya visaalavasayen baadhaavata lak vii thibunaa. meya ratea aarThika pravardhanayata thadabala adhahasak lesa visheshagnayan pennvaa dhennaa athara, isarahata nivaradhi kriyaamaarga gena aethi kiyala visvaasa karayi.ema nisa mema vasare kisidhu prashnayak aethi nove.",
      expectedText:
        "අවසාන් වසරට අදාලව පවතී ඇති අවස්තාවන් සහ පාලු පරිසරය හෙතුවෙන් නගරික ජනතාව අතර වාහන ප්‍රවාහනය අඩු වී ඇති අතර, රාජයෙ සේවා සහ ව්යවසාය ක්‍රියාකාරියත්වය විසාලවසයෙන් බාදාවට ලක් වී තිබුනා. මෙය රටේ ආර්ථික ප්‍රවර්දනයට තඩබල අදහසක් ලෙස විශෙශග්නයන් පෙන්න්වා දෙන්නා අතර, ඉසරහට නිවරදි ක්‍රියාමාර්ග ගෙන ඇති කියල විස්වාස කරයි.එම නිස මෙම වසරෙ කිසිදු ප්‍රශ්නයක් ඇති නොවෙ.",
    },
    {
      id: "Pos_Fun_0019",
      type: "normal",
      input: "25/12/2025",
      expectedText: "25/12/2025",
    },
    {
      id: "Pos_Fun_0020",
      type: "normal",
      input: "5/21/2026",
      expectedText: "5/21/2026",
    },
    {
      id: "Pos_Fun_0021",
      type: "normal",
      input: "mata kg 5k oonee.",
      expectedText: "මට kg 5ක් ඕනේ.",
    },
    {
        id: "Pos_Fun_0022",
        type: "normal",
        input: "mage NIC eka and ID eka dhenna.",
        expectedText: "mage NIC එක and ID එක දෙන්න.",
      },
      
    {
      id: "Pos_Fun_0023",
      type: "normal",
      input: "eeka dhenna.",
      expectedText: "ඒක දෙන්න.",
    },
    {
        id: "Pos_Fun_0024",
        type: "normal",
        input: "oya enavaanam mama balan innavaa.",
        expectedText: "ඔය එනවානම්  මම බලන් ඉන්නවා.",
      },
      
      
  
    // ---------------- NEGATIVE FUNCTIONAL ----------------
    {
      id: "Neg_Fun_0001",
      type: "normal",
      input: "matapaankannaoonee",
      expectedText: "මටපාන්කන්නඕනේ",
    },
    {
      id: "Neg_Fun_0002",
      type: "normal",
      input: "mamapansalyanavaa",
      expectedText: "මමපන්සල්යනවා",
    },
    {
      id: "Neg_Fun_0003",
      type: "normal",
      input: "mama pan@sal yanavaa.",
      expectedText: "මම පන්@සල් යනවා.",
    },
    {
      id: "Neg_Fun_0004",
      type: "normal",
      input: "mama pansal  yaaaanavaa.",
      expectedText: "මම පන්සල්  යාආනවා.",
    },
    {
      id: "Neg_Fun_0005",
      type: "normal",
      input: "mama 2026-05-21wenida enavaa.",
      expectedText: "මම 2026-05-21wඑනිඩ එනවා.",
    },
    {
      id: "Neg_Fun_0006",
      type: "normal",
      input: "mama pan sal yanavaa.",
      expectedText: "මම පන් සල් යනවා.",
    },
    {
      id: "Neg_Fun_0007",
      type: "normal",
      input: "mama pan\nsal yanavaa.",
      expectedText: "මම පන්\nසල් යනවා.",
    },
    {
      id: "Neg_Fun_0008",
      type: "normal",
      input: "mageIDEka denna.",
      expectedText: "මගෙඉඬෙක ඩෙන්න.",
    },
  
    // Sinhala mixed input - we validate by "should not produce clean correct Sinhala output"
    {
      id: "Neg_Fun_0009",
      type: "invalid_sinhala_mix",
      input: "mama පන්සල්  yanavaa",
      expectedText: "Warning: Sinhala characters are not allowed in Singlish input",
    },
  
    {
      id: "Neg_Fun_0010",
      type: "normal",
      input: "mama URLeka open karanna try karaa.",
      expectedText: "මම උRළෙක open කරන්න try කරා.",
    },
  
    // ---------------- UI TEST ----------------
    {
      id: "Pos_UI_0001",
      type: "ui",
      input: "mama pansal yanavaa.",
      expectedText: "මම පන්සල් යනවා.",
    },
  ];
  