// pediatric_monographs.js
// Pediatric antimicrobial monographs for Ospital ng Makati AMS app
// IMPORTANT: Verify all doses against Sanford / PSMID / institutional guidelines.

const PEDIATRIC_MONOGRAPHS = {

  // ============================
  //        RESTRICTED
  // ============================

  "Acyclovir": {
    restricted: true,
    spectrum: "Antiviral active mainly against HSV-1, HSV-2, and VZV.",
    dosing: "10–15 mg/kg/dose IV q8h (usual max 600 mg/dose) for severe HSV/VZV infections.",
    renal: "Reduce dose or extend interval in renal impairment.",
    hepatic: "No major adjustment; monitor in significant hepatic dysfunction.",
    duration: "7–14 days; 14–21 days for encephalitis.",
    monitoring: "Renal function, urine output; neurotoxicity if renal impairment.",
    warnings: "Ensure adequate hydration; caution in neonates.",
    ams: "Reserve for documented/suspected HSV/VZV.",
    weightBased: true,
    mgPerKgDose: 10
  },

  "Amphotericin B": {
    restricted: true,
    spectrum: "Broad antifungal coverage; lipid formulations preferred for reduced toxicity.",
    dosing: "Deoxycholate: 0.5–1 mg/kg/day IV; lipid: 3–5 mg/kg/day.",
    renal: "High nephrotoxicity; monitor creatinine and electrolytes.",
    hepatic: "Monitor LFTs with prolonged therapy.",
    duration: "Weeks depending on infection site.",
    monitoring: "Renal function, electrolytes, CBC, infusion reactions.",
    warnings: "Severe nephrotoxicity, electrolyte wasting.",
    ams: "Reserve for severe systemic fungal infections.",
    weightBased: true,
    mgPerKgDose: 1
  },

  "Aztreonam": {
    restricted: true,
    spectrum: "Active against aerobic Gram-negative bacilli including Pseudomonas.",
    dosing: "30–50 mg/kg/dose IV q6–8h (max 2 g/dose).",
    renal: "Adjust in renal impairment.",
    hepatic: "No major adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal function, CBC, hypersensitivity.",
    warnings: "Safe in most β-lactam allergies.",
    ams: "Use for Gram-negative infections in β-lactam–allergic patients.",
    weightBased: true,
    mgPerKgDose: 40
  },

  "Caspofungin (Echinocandin)": {
    restricted: true,
    spectrum: "Active against Candida spp. and Aspergillus.",
    dosing: "LD 70 mg/m² IV day 1 (max 70 mg), then 50 mg/m²/day.",
    renal: "No renal adjustment.",
    hepatic: "Reduce maintenance dose in moderate hepatic impairment.",
    duration: "Often ≥14 days depending on clearance of infection.",
    monitoring: "LFTs, infusion reactions.",
    warnings: "Potential hepatotoxicity.",
    ams: "Reserve for invasive candidiasis/aspergillosis.",
    weightBased: false,
    mgPerKgDose: 0
  },

  "Cefepime": {
    restricted: true,
    spectrum: "4th-gen cephalosporin active vs Gram-negatives including Pseudomonas.",
    dosing: "50 mg/kg/dose IV q8–12h (max 2 g/dose).",
    renal: "Adjust in renal impairment; neurotoxicity risk.",
    hepatic: "No routine adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal function, neurologic status.",
    warnings: "Risk of neurotoxicity in renal dysfunction.",
    ams: "Use for suspected Pseudomonas or serious GNB infections.",
    weightBased: true,
    mgPerKgDose: 50
  },

  "Colistin": {
    restricted: true,
    spectrum: "Active against MDR Gram-negative organisms.",
    dosing: "Dose varies by institutional protocol (CBA/kg/day).",
    renal: "Nephrotoxic; adjust dose.",
    hepatic: "Minimal effect.",
    duration: "7–14+ days.",
    monitoring: "Renal function, neurologic status.",
    warnings: "High nephro- and neurotoxicity.",
    ams: "Reserve strictly for MDR Gram-negative infections.",
    weightBased: false,
    mgPerKgDose: 0
  },

  "Ciprofloxacin": {
    restricted: true,
    spectrum: "Fluoroquinolone active vs Gram-negatives including Pseudomonas.",
    dosing: "10–15 mg/kg/dose PO/IV q12h (max 400 mg IV or 750 mg PO).",
    renal: "Adjust in renal impairment.",
    hepatic: "Monitor in severe hepatic dysfunction.",
    duration: "7–14 days.",
    monitoring: "QT interval, musculoskeletal symptoms.",
    warnings: "Risk of tendinopathy, QT prolongation.",
    ams: "Reserve for specific high-risk Gram-negative infections.",
    weightBased: true,
    mgPerKgDose: 15
  },

  "Doripenem": {
    restricted: true,
    spectrum: "Broad carbapenem including Pseudomonas.",
    dosing: "10–20 mg/kg/dose IV q8h (max 500 mg/dose).",
    renal: "Adjust in renal impairment.",
    hepatic: "Monitor in severe hepatic disease.",
    duration: "7–14 days.",
    monitoring: "Renal function, seizure risk.",
    warnings: "Carbapenems may lower seizure threshold.",
    ams: "Reserve for MDR Gram-negative infections.",
    weightBased: true,
    mgPerKgDose: 15
  },

  "Ertapenem": {
    restricted: true,
    spectrum: "Carbapenem with no Pseudomonas or Acinetobacter activity.",
    dosing: "15 mg/kg/dose IV/IM q12h (max 1 g/day).",
    renal: "Adjust in renal impairment.",
    hepatic: "No routine adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal function, CBC.",
    warnings: "Not effective for Pseudomonas.",
    ams: "Use for ESBL organisms when Pseudomonas risk is low.",
    weightBased: true,
    mgPerKgDose: 15
  },

  "Famciclovir": {
    restricted: true,
    spectrum: "Oral antiviral active vs HSV/VZV.",
    dosing: "20–40 mg/kg/dose PO q8h (max adult dose).",
    renal: "Adjust in renal dysfunction.",
    hepatic: "Use with caution.",
    duration: "5–10 days or longer for zoster.",
    monitoring: "Renal function.",
    warnings: "Limited pediatric data.",
    ams: "Use for HSV/VZV when oral therapy is appropriate.",
    weightBased: true,
    mgPerKgDose: 25
  },

  "Flucytosine": {
    restricted: true,
    spectrum: "Used with amphotericin B for cryptococcal meningitis and severe Candida.",
    dosing: "25 mg/kg/dose PO q6h.",
    renal: "Adjust based on CrCl and drug levels.",
    hepatic: "Monitor LFTs closely.",
    duration: "Often 2 weeks with amphotericin induction.",
    monitoring: "CBC, renal function, LFTs.",
    warnings: "Hematologic and hepatic toxicity common.",
    ams: "Use only for specialist-directed combination therapy.",
    weightBased: true,
    mgPerKgDose: 25
  },

  "Imipenem": {
    restricted: true,
    spectrum: "Very broad including some Pseudomonas and anaerobes.",
    dosing: "15–25 mg/kg/dose IV q6h (max 500 mg/dose).",
    renal: "Adjust with renal impairment.",
    hepatic: "Monitor in severe hepatic disease.",
    duration: "7–14 days.",
    monitoring: "Seizure risk, renal function.",
    warnings: "Higher seizure risk vs other carbapenems.",
    ams: "Reserve for severe polymicrobial/MDR infections.",
    weightBased: true,
    mgPerKgDose: 20
  },

  "Levofloxacin": {
    restricted: true,
    spectrum: "Respiratory fluoroquinolone with broad coverage.",
    dosing: "10–15 mg/kg/dose PO/IV q12–24h (max 750 mg/day).",
    renal: "Adjust in renal impairment.",
    hepatic: "Monitor in liver disease.",
    duration: "7–14 days.",
    monitoring: "QT interval, musculoskeletal effects.",
    warnings: "Tendinopathy, QT prolongation.",
    ams: "Reserve for MDR pneumococcus or Pseudomonas.",
    weightBased: true,
    mgPerKgDose: 10
  },

  "Meropenem": {
    restricted: true,
    spectrum: "Broad carbapenem including ESBL & Pseudomonas.",
    dosing: "20–40 mg/kg/dose IV q8h (max 2 g/dose).",
    renal: "Adjust for renal impairment.",
    hepatic: "Monitor with hepatic disease.",
    duration: "7–14 days.",
    monitoring: "Seizure risk, renal function.",
    warnings: "Seizures possible.",
    ams: "Reserve for MDR GNB infections.",
    weightBased: true,
    mgPerKgDose: 30
  },

  "Micafungin (Echinocandin)": {
    restricted: true,
    spectrum: "Active vs Candida spp. and Aspergillus (fungistatic).",
    dosing: "2–4 mg/kg/day IV (max 100 mg/day).",
    renal: "No adjustment.",
    hepatic: "Monitor LFTs.",
    duration: "≥14 days depending on infection.",
    monitoring: "LFTs, infusion reactions.",
    warnings: "Hepatotoxicity risk.",
    ams: "Reserve for invasive candidiasis/aspergillosis.",
    weightBased: true,
    mgPerKgDose: 3
  },

  "Moxifloxacin": {
    restricted: true,
    spectrum: "Fluoroquinolone with enhanced GP and anaerobic coverage.",
    dosing: "7–10 mg/kg/day PO/IV (max 400 mg/day).",
    renal: "No major adjustment.",
    hepatic: "Avoid in severe hepatic failure.",
    duration: "7–14 days.",
    monitoring: "QT interval, CNS effects.",
    warnings: "QT prolongation; tendon toxicity.",
    ams: "Use only with specialist input.",
    weightBased: true,
    mgPerKgDose: 7
  },

  "Ofloxacin": {
    restricted: true,
    spectrum: "Fluoroquinolone mainly vs Gram-negatives.",
    dosing: "7.5–10 mg/kg/dose PO q12h (max 400 mg/dose).",
    renal: "Adjust in renal impairment.",
    hepatic: "Monitor in hepatic dysfunction.",
    duration: "7–14 days.",
    monitoring: "CNS & tendon toxicity.",
    warnings: "Fluoroquinolone class risks.",
    ams: "Reserve for MDR infections.",
    weightBased: true,
    mgPerKgDose: 10
  },

  "Remdesivir": {
    restricted: true,
    spectrum: "Active vs SARS-CoV-2.",
    dosing: "LD 5 mg/kg IV (max 200 mg) then 2.5 mg/kg/day (max 100 mg).",
    renal: "Avoid with severe renal impairment.",
    hepatic: "Monitor ALT; discontinue with hepatitis signs.",
    duration: "3–5 days; up to 10 for severe cases.",
    monitoring: "LFTs, renal function.",
    warnings: "Follow national COVID-19 protocols.",
    ams: "Reserve for moderate-severe COVID-19.",
    weightBased: true,
    mgPerKgDose: 5
  },

  "Valganciclovir": {
    restricted: true,
    spectrum: "Active against CMV.",
    dosing: "Dose based on BSA × CrCl formula (e.g., 7 × BSA × CrCl).",
    renal: "Strong adjustment needed.",
    hepatic: "Monitor LFTs.",
    duration: "Weeks–months.",
    monitoring: "CBC for neutropenia, renal function.",
    warnings: "Myelosuppression common.",
    ams: "Reserve for CMV disease or prophylaxis.",
    weightBased: false,
    mgPerKgDose: 0
  },

  "Vancomycin": {
    restricted: true,
    spectrum: "Glycopeptide active vs MRSA and resistant GP.",
    dosing: "10–15 mg/kg/dose IV q6h (AUC/trough-guided).",
    renal: "Adjust based on levels and renal function.",
    hepatic: "Monitor in severe hepatic disease.",
    duration: "Varies widely.",
    monitoring: "Drug levels, renal function.",
    warnings: "Red man syndrome; nephrotoxicity.",
    ams: "Reserve for MRSA/resistant GP.",
    weightBased: true,
    mgPerKgDose: 15
  },

  "Voriconazole": {
    restricted: true,
    spectrum: "Active against Aspergillus and many molds.",
    dosing: "9 mg/kg/dose q12h × 2 doses, then 8 mg/kg/dose q12h.",
    renal: "Avoid IV in severe renal impairment.",
    hepatic: "Reduce maintenance dose in hepatic impairment.",
    duration: "Weeks to months.",
    monitoring: "Drug levels, LFTs, visual disturbances.",
    warnings: "Photosensitivity, hepatotoxicity.",
    ams: "Reserve for invasive mold infections.",
    weightBased: true,
    mgPerKgDose: 8
  },

  // ============================
  //        MONITORED
  // ============================

  "Amikacin": {
    restricted: false,
    spectrum: "Aminoglycoside with strong Gram-negative activity.",
    dosing: "15–20 mg/kg/dose IV q24h (extended-interval).",
    renal: "Adjust based on renal function and levels.",
    hepatic: "No major adjustment.",
    duration: "5–7 days common.",
    monitoring: "Drug levels, renal function, audiology.",
    warnings: "Nephrotoxicity, ototoxicity.",
    ams: "De-escalate promptly when possible.",
    weightBased: true,
    mgPerKgDose: 15
  },

  "Cefotaxime": {
    restricted: false,
    spectrum: "3rd-gen cephalosporin with broad GN and some GP coverage.",
    dosing: "50 mg/kg/dose IV q6–8h (max 2 g/dose).",
    renal: "Adjust in renal impairment.",
    hepatic: "Monitor in severe hepatic disease.",
    duration: "7–10 days (longer for meningitis).",
    monitoring: "Renal function, CBC.",
    warnings: "Risk of C. difficile.",
    ams: "Step down when culture allows.",
    weightBased: true,
    mgPerKgDose: 50
  },

  "Ceftriaxone": {
    restricted: false,
    spectrum: "3rd-gen cephalosporin; strong GN, limited GP.",
    dosing: "50–75 mg/kg/day IV/IM (max 2 g/day; up to 4 g for severe infections).",
    renal: "Adjust only in severe combined renal/hepatic failure.",
    hepatic: "Risk of biliary sludging.",
    duration: "7–10 days.",
    monitoring: "LFTs, CBC.",
    warnings: "Avoid in neonates with hyperbilirubinemia.",
    ams: "Commonly overused—narrow when possible.",
    weightBased: true,
    mgPerKgDose: 60
  },

  "Ceftazidime": {
    restricted: false,
    spectrum: "3rd-gen cephalosporin including Pseudomonas.",
    dosing: "40–50 mg/kg/dose IV q8h (max 2 g/dose).",
    renal: "Adjust in renal impairment.",
    hepatic: "Minimal adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal function, neurologic status.",
    warnings: "Resistance may emerge.",
    ams: "Use when PSA is suspected.",
    weightBased: true,
    mgPerKgDose: 50
  },

  "Clindamycin": {
    restricted: false,
    spectrum: "GP cocci including some MRSA + anaerobes.",
    dosing: "10–13 mg/kg/dose IV/PO q8h.",
    renal: "No major adjustment.",
    hepatic: "Adjust in severe hepatic impairment.",
    duration: "5–10 days typically.",
    monitoring: "GI tolerance, LFTs.",
    warnings: "High risk of C. difficile.",
    ams: "Use only for clear indications.",
    weightBased: true,
    mgPerKgDose: 10
  },

  "Gentamicin": {
    restricted: false,
    spectrum: "Aminoglycoside active vs GN bacilli; synergy vs GP.",
    dosing: "7.5 mg/kg/day divided or q24h extended interval.",
    renal: "Adjust in renal impairment; monitor levels.",
    hepatic: "No direct adjustment.",
    duration: "5–7 days typical.",
    monitoring: "Drug levels, renal function.",
    warnings: "Ototoxicity, nephrotoxicity.",
    ams: "De-escalate when cultures available.",
    weightBased: true,
    mgPerKgDose: 7.5
  },

  "Kanamycin": {
    restricted: false,
    spectrum: "Aminoglycoside mainly used for MDR TB.",
    dosing: "15–30 mg/kg/day IM/IV in 1–2 doses.",
    renal: "Adjust in renal impairment.",
    hepatic: "No routine adjustment.",
    duration: "Prolonged (months) for MDR TB.",
    monitoring: "Renal function, audiology.",
    warnings: "High risk of hearing loss.",
    ams: "Use only in MDR TB regimens.",
    weightBased: true,
    mgPerKgDose: 15
  },

  "Neomycin": {
    restricted: false,
    spectrum: "Mainly gut decontamination; minimal systemic use.",
    dosing: "25–50 mg/kg/day PO in divided doses.",
    renal: "Avoid in renal impairment due to toxicity risk.",
    hepatic: "Used in hepatic encephalopathy protocols.",
    duration: "Short courses preferred.",
    monitoring: "Renal function, auditory function.",
    warnings: "High oto/nephrotoxicity if absorbed systemically.",
    ams: "Use only for specific indications.",
    weightBased: false,
    mgPerKgDose: 0
  },

  "Piperacillin–Tazobactam": {
    restricted: false,
    spectrum: "Broad GN (including Pseudomonas), GP, anaerobes.",
    dosing: "80–100 mg/kg/dose (piperacillin component) IV q6–8h.",
    renal: "Adjust in renal impairment.",
    hepatic: "Monitor in severe hepatic disease.",
    duration: "5–14 days.",
    monitoring: "Renal function, electrolytes.",
    warnings: "High sodium load.",
    ams: "Reserve for polymicrobial or PSA-risk infections.",
    weightBased: true,
    mgPerKgDose: 90
  },

  "Streptomycin": {
    restricted: false,
    spectrum: "TB drug; some use in zoonoses.",
    dosing: "15–20 mg/kg/day IM (max 1 g/day).",
    renal: "Adjust in renal impairment.",
    hepatic: "No major adjustment.",
    duration: "Weeks–months (TB).",
    monitoring: "Renal function, audiology.",
    warnings: "Permanent hearing loss risk.",
    ams: "Use only when indicated by TB specialists.",
    weightBased: true,
    mgPerKgDose: 15
  },

  "Tobramycin": {
    restricted: false,
    spectrum: "Aminoglycoside similar to gentamicin; strong vs Pseudomonas.",
    dosing: "10–12 mg/kg/day q24h or 2.5–3 mg/kg/dose q8h.",
    renal: "Adjust dose/interval in renal impairment.",
    hepatic: "No major adjustment.",
    duration: "5–7 days typical.",
    monitoring: "Drug levels, renal function, audiology.",
    warnings: "Nephro- and ototoxicity.",
    ams: "Use for PSA infections (e.g., CF).",
    weightBased: true,
    mgPerKgDose: 10
  }

};
