// adult_monographs.js
// Full adult antimicrobial monographs for Ospital ng Makati AMS app.
// IMPORTANT: Verify all data against Sanford Guide / PSMID / local OsMak AMS
// before any clinical use. This is decision-support scaffolding only.

const ADULT_MONOGRAPHS = {

  // ======================================
  //            RESTRICTED ADULT
  // ======================================

  "Acyclovir IV": {
    spectrum: "HSV-1, HSV-2, VZV; limited EBV; no CMV activity.",
    dosing: "5–10 mg/kg IV q8h depending on severity (10 mg/kg q8h for encephalitis/severe VZV). Dose based on IBW for obesity.",
    renal: "Adjust interval/dose when CrCl <50 mL/min; hydrate to avoid crystal nephropathy.",
    hepatic: "No major adjustment; monitor LFTs in severe hepatic impairment.",
    duration: "7–14 days; 14–21 days for HSV encephalitis.",
    monitoring: "Renal function, urine output; neurotoxicity in renal impairment.",
    warnings: "High nephrotoxicity risk if dehydrated or rapid infusion; careful with other nephrotoxins.",
    ams: "Restricted for confirmed/suspected HSV/VZV severe disease; de-escalate when diagnosis excluded.",
    weightBased: false
  },

  "Amikacin": {
    spectrum: "Aminoglycoside: strong Gram-negative activity including Pseudomonas; synergistic for some Gram-positive.",
    dosing: "15–20 mg/kg IV once daily (extended interval) OR 7.5 mg/kg q12h depending on institution.",
    renal: "Adjust based on CrCl and drug levels; nephro-/ototoxic.",
    hepatic: "No major adjustment.",
    duration: "Usually 5–7 days; avoid prolonged monotherapy.",
    monitoring: "Drug levels (peak/trough or AUC), renal function, audiology for prolonged therapy.",
    warnings: "Nephrotoxicity and ototoxicity; avoid with other nephrotoxins.",
    ams: "Restricted; use for serious Gram-negative infections; de-escalate promptly.",
    weightBased: true
  },

  "Amphotericin B": {
    spectrum: "Very broad: most yeasts, molds; lipid formulations preferred (less nephrotoxic).",
    dosing: "Deoxycholate 0.5–1 mg/kg/day IV; liposomal 3–5 mg/kg/day IV.",
    renal: "Extremely nephrotoxic—monitor and prehydrate.",
    hepatic: "Monitor LFTs; no routine adjustment.",
    duration: "Weeks to months depending on fungal infection.",
    monitoring: "Renal function, K/Mg, infusion reactions.",
    warnings: "Electrolyte wasting, nephrotoxicity, infusion reactions.",
    ams: "Reserve for severe systemic fungal infections.",
    weightBased: true
  },

  "Aztreonam": {
    spectrum: "Gram-negative aerobes including Pseudomonas; NO Gram-positive or anaerobic activity.",
    dosing: "1–2 g IV q6–8h (max 8 g/day).",
    renal: "Adjust when CrCl <30 mL/min.",
    hepatic: "Minimal adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal function; hypersensitivity (rare).",
    warnings: "Safe in most β-lactam allergies except ceftazidime allergy (shared side chain).",
    ams: "Restricted for Gram-negative infection in severe β-lactam allergies.",
    weightBased: false
  },

  "Cefepime": {
    spectrum: "4th-gen cephalosporin; strong Gram-negative including Pseudomonas; some Gram-positive.",
    dosing: "1–2 g IV q8–12h; 2 g q8h for severe infections/PSA.",
    renal: "Adjust when CrCl <60 mL/min; neurotoxicity possible.",
    hepatic: "No major adjustment.",
    duration: "7–14 days.",
    monitoring: "Mental status (neurotoxicity), renal function.",
    warnings: "Neurotoxicity in renal impairment.",
    ams: "Restricted for PSA/high-risk GNB infections.",
    weightBased: false
  },

  "Ceftazidime–Avibactam (NF)": {
    spectrum: "CRE (KPC), ESBL-producing GNB, PSA; limited Gram-positive.",
    dosing: "2.5 g IV q8h (2 hr infusion).",
    renal: "Adjust if CrCl <50 mL/min.",
    hepatic: "No major adjustment.",
    duration: "7–14+ days for MDR infections.",
    monitoring: "Renal function.",
    warnings: "Reserve for confirmed/suspected CRE; check susceptibility.",
    ams: "Restricted; use only for CRE or MDR organisms.",
    weightBased: false
  },

  "Ceftolozane–Tazobactam (NF)": {
    spectrum: "Highly active vs MDR Pseudomonas; good Gram-negative including ESBL; limited Gram-positive.",
    dosing: "1.5 g IV q8h; 3 g q8h for pneumonia.",
    renal: "Adjust if CrCl <50 mL/min.",
    hepatic: "Minimal adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal function.",
    warnings: "High cost; use for documented/suspected MDR PSA.",
    ams: "Restricted for MDR PSA.",
    weightBased: false
  },

  "Colistin": {
    spectrum: "MDR Gram-negatives: Acinetobacter, PSA, CRE (variable).",
    dosing: "Refer to institutional colistin-base-activity protocol.",
    renal: "High nephrotoxicity; adjust dosing.",
    hepatic: "Minimal adjustment.",
    duration: "Use shortest possible; 7–14+ days.",
    monitoring: "Renal function, neurotoxicity.",
    warnings: "Nephrotoxic, neurotoxic; combination therapy often preferred.",
    ams: "Restricted to MDR GNB only.",
    weightBased: false
  },

  "Doripenem": {
    spectrum: "Broad carbapenem including PSA, GNB, GP, anaerobes.",
    dosing: "500 mg IV q8h (1–4 hr infusion).",
    renal: "Adjust if CrCl <50 mL/min.",
    hepatic: "No major adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal function; seizure risk.",
    warnings: "Avoid in pneumonia due to worse outcomes vs comparators.",
    ams: "Restricted carbapenem; use only when needed.",
    weightBased: false
  },

  "Ertapenem": {
    spectrum: "ESBL GNB, anaerobes; NO Pseudomonas or Acinetobacter.",
    dosing: "1 g IV/IM q24h.",
    renal: "Adjust if CrCl <30 mL/min.",
    hepatic: "Minimal adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal function.",
    warnings: "Do NOT use for PSA infections.",
    ams: "Restricted for ESBL infections without PSA risk.",
    weightBased: false
  },

  "Ganciclovir": {
    spectrum: "CMV, HSV, VZV.",
    dosing: "5 mg/kg IV q12h induction; then 5 mg/kg/day maintenance.",
    renal: "Strongly adjust by CrCl.",
    hepatic: "Monitor LFTs.",
    duration: "Weeks to months depending on CMV status.",
    monitoring: "CBC (neutropenia), renal, LFTs.",
    warnings: "Major bone marrow suppression.",
    ams: "Restricted to CMV treatment/prophylaxis.",
    weightBased: true
  },

  "Gentamicin": {
    spectrum: "Gram-negatives; synergy for GP.",
    dosing: "5–7 mg/kg/day IV once daily (preferred).",
    renal: "Adjust interval/dose; monitor levels.",
    hepatic: "Minimal adjustment.",
    duration: "5–7 days typically.",
    monitoring: "Drug levels, renal, auditory.",
    warnings: "Ototoxicity and nephrotoxicity.",
    ams: "Restricted; use only for specific GNB or synergy.",
    weightBased: true
  },

  "Imipenem": {
    spectrum: "Very broad: GNB, GP, anaerobes; PSA; ESBL.",
    dosing: "500 mg IV q6h OR 1 g IV q8h depending on severity.",
    renal: "Adjust if CrCl <70 mL/min; seizure risk increases.",
    hepatic: "Minimal adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal, mental status.",
    warnings: "Highest seizure risk among carbapenems.",
    ams: "Restricted.",
    weightBased: false
  },

  "Linezolid": {
    spectrum: "MRSA, VRE, resistant GP.",
    dosing: "600 mg IV/PO q12h.",
    renal: "No adjustment.",
    hepatic: "No adjustment; caution in severe liver disease.",
    duration: "Typically ≤14 days to avoid toxicity.",
    monitoring: "CBC weekly (thrombocytopenia), optic neuropathy with long use.",
    warnings: "SSRI interaction (serotonin syndrome).",
    ams: "Restricted for MRSA/VRE only.",
    weightBased: false
  },

  "Meropenem": {
    spectrum: "Very broad: ESBL, PSA, anaerobes.",
    dosing: "1 g IV q8h or 2 g q8h for CNS infections (extended infusion preferred).",
    renal: "Adjust if CrCl <50 mL/min.",
    hepatic: "Minimal adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal, mental status.",
    warnings: "Seizures possible.",
    ams: "Restricted carbapenem.",
    weightBased: false
  },

  "Micafungin": {
    spectrum: "Candida spp., some Aspergillus activity.",
    dosing: "100 mg IV daily (up to 150 mg for esophageal candidiasis).",
    renal: "No adjustment.",
    hepatic: "Monitor LFTs.",
    duration: "≥14 days for candidemia after clearance.",
    monitoring: "LFTs.",
    warnings: "Hepatotoxicity.",
    ams: "Reserved for invasive candidiasis or mold infections.",
    weightBased: false
  },

  "Polymyxin B": {
    spectrum: "MDR GNB including PSA, A. baumannii.",
    dosing: "Refer to institutional protocol; typically 1.25–1.5 mg/kg/day divided.",
    renal: "Less renally cleared than colistin; still monitor Cr.",
    hepatic: "Minimal.",
    duration: "7–14+ days.",
    monitoring: "Renal, neurotoxicity.",
    warnings: "Neurotoxicity; avoid unnecessary use.",
    ams: "Restricted.",
    weightBased: true
  },

  "Remdesivir": {
    spectrum: "SARS-CoV-2.",
    dosing: "200 mg IV once, then 100 mg IV daily x 4+ days.",
    renal: "Avoid if eGFR <30 mL/min (SBECD carrier).",
    hepatic: "Avoid if ALT very high.",
    duration: "3–10 days.",
    monitoring: "LFTs.",
    warnings: "Transaminitis.",
    ams: "Restricted to COVID-19 protocols.",
    weightBased: false
  },

  "Tigecycline": {
    spectrum: "Broad: MRSA, VRE, anaerobes, ESBL; NOT PSA.",
    dosing: "100 mg IV load, then 50 mg q12h.",
    renal: "No adjustment.",
    hepatic: "Adjust in Child-Pugh C.",
    duration: "7–14 days.",
    monitoring: "LFTs, nausea/vomiting.",
    warnings: "Higher mortality in some studies; use cautiously.",
    ams: "Restricted salvage therapy.",
    weightBased: false
  },

  "Valganciclovir oral": {
    spectrum: "CMV.",
    dosing: "900 mg PO q12h induction; then 900 mg daily maintenance (adjust by CrCl).",
    renal: "Strong renal adjustment needed.",
    hepatic: "Monitor LFTs.",
    duration: "Weeks to months.",
    monitoring: "CBC, renal.",
    warnings: "Severe neutropenia.",
    ams: "Restricted for CMV.",
    weightBased: false
  },

  "Vancomycin": {
    spectrum: "MRSA, resistant GP.",
    dosing: "15–20 mg/kg IV q8–12h (AUC-guided dosing).",
    renal: "Adjust by CrCl and AUC levels.",
    hepatic: "No major adjustment.",
    duration: "Varies widely.",
    monitoring: "AUC/troughs, renal function.",
    warnings: "Red-man syndrome; nephrotoxicity.",
    ams: "Restricted for MRSA/resistant GP only.",
    weightBased: true
  },

  "Voriconazole": {
    spectrum: "Aspergillus and other molds.",
    dosing: "6 mg/kg IV q12h x 2 doses, then 4 mg/kg q12h (or 200–300 mg PO q12h).",
    renal: "Avoid IV if CrCl <50 mL/min due to SBECD.",
    hepatic: "Reduce maintenance dose in Child-Pugh A/B.",
    duration: "Weeks to months.",
    monitoring: "Drug levels, LFTs, vision changes.",
    warnings: "Photosensitivity, hepatotoxicity.",
    ams: "Restricted mold-active azole.",
    weightBased: true
  },

  // ======================================
  //             MONITORED ADULT
  // ======================================

  "Ceftriaxone": {
    spectrum: "Broad Gram-negative, some Gram-positive; no PSA.",
    dosing: "1–2 g IV q24h (up to 4 g/day for severe disease).",
    renal: "No major adjustment unless combined hepatic+renal failure.",
    hepatic: "Caution: biliary sludging.",
    duration: "5–10 days typical.",
    monitoring: "LFTs.",
    warnings: "Avoid in neonates.",
    ams: "Monitored due to high overuse.",
    weightBased: false
  },

  "Ceftazidime": {
    spectrum: "Gram-negative including PSA; weaker GP.",
    dosing: "2 g IV q8h.",
    renal: "Adjust if CrCl <50 mL/min.",
    hepatic: "Minimal.",
    duration: "7–14 days.",
    monitoring: "Renal, CNS toxicity.",
    warnings: "Resistance emergence common.",
    ams: "Monitored PSA agent.",
    weightBased: false
  },

  "Ciprofloxacin": {
    spectrum: "Strong Gram-negative including PSA; atypicals.",
    dosing: "400 mg IV q12h OR 500–750 mg PO q12h.",
    renal: "Adjust if CrCl <50 mL/min.",
    hepatic: "Minimal.",
    duration: "7–14 days.",
    monitoring: "QT interval, tendons.",
    warnings: "Tendon rupture, QT prolongation.",
    ams: "Monitored due to collateral damage risk.",
    weightBased: false
  },

  "Fluconazole": {
    spectrum: "Candida spp. (variable), Cryptococcus.",
    dosing: "400–800 mg IV/PO daily.",
    renal: "Adjust when CrCl <50 mL/min.",
    hepatic: "Monitor LFTs.",
    duration: "Varies by indication.",
    monitoring: "LFTs, QT interval.",
    warnings: "Drug interactions.",
    ams: "Monitored antifungal.",
    weightBased: false
  },

  "Levofloxacin": {
    spectrum: "Respiratory FQ; Gram-negatives, GP, atypicals.",
    dosing: "500–750 mg IV/PO daily.",
    renal: "Adjust by CrCl.",
    hepatic: "Minimal.",
    duration: "5–14 days.",
    monitoring: "QT interval, tendons.",
    warnings: "High QT risk.",
    ams: "Monitored agent.",
    weightBased: false
  },

  "Moxifloxacin": {
    spectrum: "Enhanced GP, anaerobes; no PSA.",
    dosing: "400 mg IV/PO daily.",
    renal: "No major adjustment.",
    hepatic: "Avoid in severe hepatic disease.",
    duration: "5–10 days typical.",
    monitoring: "QT interval.",
    warnings: "QT prolongation.",
    ams: "Monitored; avoid when PSA risk.",
    weightBased: false
  },

  "Piperacillin–Tazobactam": {
    spectrum: "Broad: GP, GN including PSA, anaerobes.",
    dosing: "4.5 g IV q6–8h; extended infusion preferred.",
    renal: "Adjust when CrCl <40 mL/min.",
    hepatic: "Minimal adjustment.",
    duration: "5–14 days typical.",
    monitoring: "Renal, electrolytes.",
    warnings: "High sodium load.",
    ams: "Monitored broad-spectrum agent.",
    weightBased: false
  }
};
