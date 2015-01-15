// Hyphenation patterns for Modern Polytonic Greek.
// Created by Dimitrios Filippou with some ideas borrowed from 
// Yannis Haralambous, Kostis Dryllerakis and Claudio Beccari.
// From http://tug.org/svn/texhyphen/branches/ptex/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-el-polyton.tex
// Converted by Pablo Rodríguez (hyphenator at pragmata dot tk)
/*global Hyphenator*/
Hyphenator.languages['el-polyton'] = {
    leftmin: 2,
    rightmin: 2,
    specialChars: "αεηιουωϊϋἀἁἂἃἄἅἆἇἐἑἒἓἔἕἠἡἢἣἤἥἦἧἰἱἲἳἴἵἶἷὀὁὂὃὄὅὐὑὒὓὔὕὖὗὠὡὢὣὤὥὦὧὰὲὴὶὸὺὼᾀᾁᾂᾃᾄᾅᾆᾇᾐᾑᾒᾓᾔᾕᾖᾗᾠᾡᾢᾣᾤᾥᾦᾧᾲᾳᾴᾶᾷῂῃῄῆῇῒῖῗῢῦῧῲῳῴῶῷάέήίόύώΐΰάέήίόύώΐΰβγκδζθλμπντξρσϲςφχψ'ʼ᾿’᾽ῤῥ",
    patterns: {
        2: "α1ε1η1ι1ο1υ1ω1ϊ1ϋ1ἀ1ἁ1ἂ1ἃ1ἄ1ἅ1ἆ1ἇ1ἐ1ἑ1ἒ1ἓ1ἔ1ἕ1ἠ1ἡ1ἢ1ἣ1ἤ1ἥ1ἦ1ἧ1ἰ1ἱ1ἲ1ἳ1ἴ1ἵ1ἶ1ἷ1ὀ1ὁ1ὂ1ὃ1ὄ1ὅ1ὐ1ὑ1ὒ1ὓ1ὔ1ὕ1ὖ1ὗ1ὠ1ὡ1ὢ1ὣ1ὤ1ὥ1ὦ1ὧ1ὰ1ὲ1ὴ1ὶ1ὸ1ὺ1ὼ1ᾀ1ᾁ1ᾂ1ᾃ1ᾄ1ᾅ1ᾆ1ᾇ1ᾐ1ᾑ1ᾒ1ᾓ1ᾔ1ᾕ1ᾖ1ᾗ1ᾠ1ᾡ1ᾢ1ᾣ1ᾤ1ᾥ1ᾦ1ᾧ1ᾲ1ᾳ1ᾴ1ᾶ1ᾷ1ῂ1ῃ1ῄ1ῆ1ῇ1ῒ1ῖ1ῗ1ῢ1ῦ1ῧ1ῲ1ῳ1ῴ1ῶ1ῷ1ά1έ1ή1ί1ό1ύ1ώ1ΐ1ΰ1ά1έ1ή1ί1ό1ύ1ώ1ΐ1ΰ16'6ʼ6᾿",
        3: "α2ια2ία2ία2ὶα2ῖα2ἰα2ἴα2ἲα2ἶα2ἱα2ἵα2ἳα2ἷά2ιά2ιά2ϊά2ϊα2υα2ύα2ύα2ὺα2ῦα2ὐα2ὔα2ὒα2ὖα2ὑα2ὕα2ὓα2ὗά3υά3υε2ιε2ίε2ίε2ὶε2ῖε2ἰε2ἴε2ἲε2ἶε2ἱε2ἵε2ἳε2ἷέ2ιέ2ιέ2ϊέ2ϊε2υε2ύε2ύε2ὺε2ῦε2ὐε2ὔε2ὒε2ὖε2ὑε2ὕε2ὓε2ὗέ3υέ3υη2υη2ύη2ύη2ὺη2ῦη2ὐη2ὔη2ὒη2ὖη2ὑη2ὕη2ὓη2ὗο2ιο2ίο2ίο2ὶο2ῖο2ἰο2ἴο2ἲο2ἶο2ἱο2ἵο2ἳο2ἷό2ιό2ιό2ϊό2ϊο2υο2ύο2ύο2ὺο2ῦο2ὐο2ὔο2ὒο2ὖο2ὑο2ὕο2ὓο2ὗό3υό3υυ2ιυ2ίυ2ίυ2ὶυ2ῖυ2ἰυ2ἴυ2ἲυ2ἶυ2ἱυ2ἵυ2ἳυ2ἷα2ηα2ϊα2ϋά3ϋά3ϋε2ηέ2ηέ2ηε2ϊε2ϋό2ηό2ηο2ϊω2ιὠ2ιι2αι2άι2άι2ὰι2ᾶι2ει2έι2έι2ὲι2οι2όι2όι2ὸι2ωι2ώι2ώι2ὼι2ῶ_ί3_ί3_ῖ3_ἰ3_ἱ3η2αῃ2αη2άη2άη2ὰη2ᾶῃ2άῃ2άῃ2ὰῃ2ᾶη2εῃ2εη2έη2έη2ὲῃ2έῃ2έῃ2ὲη2οῃ2οη2όη2όη2ὸῃ2όῃ2όῃ2ὸη2ωῃ2ωη2ώη2ώη2ὼη2ῶῃ2ώῃ2ώῃ2ὼῃ2ῶ_ή3_ή3_ῆ3_ἠ3_ἡ3υ2αυ2άυ2άυ2ὰυ2ᾶυ2ευ2έυ2έυ2ὲυ2ου2όυ2όυ2ὸυ2ωυ2ώυ2ώυ2ὼυ2ῶ_ύ3_ύ3_ῦ3_ὑ36β_6γ_6δ_6ζ_6θ_6κ_6λ_6μ_6ν_6ξ_6π_6ρ_6σ_6ϲ_6ς_6τ_6φ_6χ_6ψ_6β'6βʼ6β᾿6γ'6γʼ6γ᾿6δ'6δʼ6δ᾿6ζ'6ζʼ6ζ᾿6θ'6θʼ6θ᾿6κ'6κʼ6κ᾿6λ'6λʼ6λ᾿6μ'6μʼ6μ᾿6ν'6νʼ6ν᾿6ξ'6ξʼ6ξ᾿6π'6πʼ6π᾿6ρ'6ρʼ6ρ᾿6σ'6σʼ6σ᾿6ϲ'6ϲʼ6ϲ᾿6τ'6τʼ6τ᾿6φ'6φʼ6φ᾿6χ'6χʼ6χ᾿6ψ'6ψʼ6ψ᾿_β6_γ6_δ6_ζ6_θ6_κ6_λ6_μ6_ν6_ξ6_π6_ρ6_σ6_ϲ6_τ6_φ6_χ6_ψ6",
        4: "ά3η_ά3η_ά3ι_ά3ι_ά3ϊ_ά3ϊ_ό2ειό2ειό3η_ό3η_ό3ι_ό3ι_ό3ϊ_ό3ϊ_6γκ_6μπ_6ντ_6τζ_6τσ_6τϲ_6τς_6μπ'6μπʼ6μπ᾿6ντ'6ντ’6ντ᾿6τζ'6τζʼ6τζ᾿6τσ'6τσʼ6τσ᾽6τϲ'6τϲʼ6τϲ᾿4β1β4γ1γ4δ1δ4ζ1ζ4θ1θ4κ1κ4λ1λ4μ1μ4ν1ν4π1π4ρ1ρ4ῤ1ῥ4σ1σ4ϲ1ϲ4τ1τ4φ1φ4χ1χ4ψ1ψ4β1ζ4β1θ4β1κ4β1μ4β1ν4β1ξ4β1π4β1σ4β1ϲ4β1τ4β1φ4β1χ4β1ψ4γ1β4γ1ζ4γ1θ4γ1κ4γ1μ4γ1ξ4γ1π4γ1σ4γ1ϲ4γ1τ4γ1φ4γ1χ4γ1ψ4δ1β4δ1γ4δ1ζ4δ1θ4δ1κ4δ1λ4δ1ξ4δ1π4δ1σ4δ1ϲ4δ1τ4δ1φ4δ1χ4δ1ψ4ζ1β4ζ1γ4ζ1δ4ζ1θ4ζ1κ4ζ1λ4ζ1μτζ2μ4ζ1ν4ζ1ξ4ζ1π4ζ1ρ4ζ1σ4ζ1ϲ4ζ1τ4ζ1φ4ζ1χ4ζ1ψ4θ1β4θ1γ4θ1δ4θ1ζ4θ1κ4θ1μσθ2μϲθ2μ4θ1ξ4θ1π4θ1σ4θ1ϲ4θ1τ4θ1φ4θ1χ4θ1ψ4κ1β4κ1γ4κ1δ4κ1ζ4κ1θ4κ1ξ4κ1π4κ1σ4κ1ϲ4κ1φ4κ1χ4κ1ψ4λ1β4λ1γ4λ1δ4λ1ζ4λ1θ4λ1κ4λ1μ4λ1ν4λ1ξ4λ1π4λ1ρ4λ1σ4λ1ϲ4λ1τ4λ1φ4λ1χ4λ1ψ4μ1β4μ1γ4μ1δ4μ1ζ4μ1θ4μ1κ4μ1λ4μ1ξ4μ1π4μ1ρ4μ1σ4μ1ϲ4μ1τ4μ1φ4μ1χ4μ1ψ4ν1β4ν1γ4ν1δ4ν1ζ4ν1θ4ν1κ4ν1λ4ν1μ4ν1ξ4ν1π4ν1ρ4ν1σ4ν1ϲ4ν1τ4ν1φ4ν1χ4ν1ψ4ξ1β4ξ1γ4ξ1δ4ξ1ζ4ξ1θ4ξ1κ4ξ1λ4ξ1μ4ξ1ν4ξ1π4ξ1ρ4ξ1σ4ξ1ϲ4ξ1τ4ξ1φ4ξ1χ4ξ1ψ4π1β4π1γ4π1δ4π1ζ4π1θ4π1κ4π1μ4π1ξ4π1σ4π1ϲ4π1φ4π1χ4π1ψ4ρ1β4ρ1γ4ρ1δ4ρ1ζ4ρ1θ4ρ1κ4ρ1λ4ρ1μ4ρ1ν4ρ1ξ4ρ1π4ρ1σ4ρ1ϲ4ρ1τ4ρ1φ4ρ1χ4ρ1ψ4σ1δ4ϲ1δ4σ1ζ4ϲ1ζ4σ1ν4ϲ1ν4σ1ξ4ϲ1ξ4σ1ρ4ϲ1ρ4σ1ψ4ϲ1ψ4τ1β4τ1γ4τ1δ4τ1θ4τ1ν4τ1ξ4τ1π4τ1φστ2φϲτ2φ4τ1χ4τ1ψ4φ1β4φ1γ4φ1δ4φ1ζ4φ1κ4φ1ν4φ1ξ4φ1π4φ1σ4φ1ϲ4φ1χ4φ1ψ4χ1β4χ1γ4χ1δ4χ1ζ4χ1κ4χ1μ4χ1ξ4χ1π4χ1σ4χ1ϲ4χ1φ4χ1ψ4ψ1β4ψ1γ4ψ1δ4ψ1ζ4ψ1θ4ψ1κ4ψ1λ4ψ1μ4ψ1ν4ψ1ξ4ψ1π4ψ1ρ4ψ1σ4ψ1ϲ4ψ1τ4ψ1φ4ψ1χβγ2κσγ2κϲγ2κσμ2πϲμ2πμν2τσν2τϲν2τ6βρ_6γλ_6κλ_6κτ_6κς_6κϲ_6κσ_6λς_6λϲ_6λσ_6μς_6μϲ_6μσ_6νς_6νϲ_6νσ_6ρς_6ρϲ_6ρσ_6σκ_6ϲκ_6στ_6ϲτ_6τλ_6τρ_6φτ_6χτ_",
        5: "ο3ϊ3όο3ϊ3όο3ϊ3ὸβ5ν2τζ5ν2τλ5ν2τρ5ν2τ",
        6: "4ρ5γ2μ4ρ5θ2μ4λ5κ2μ4ρ5κ2μ4γ5κ2φ4ν5κ2φ4γ5ξ2τ4ρ5ξ2τ4ρ5φ2ν4ρ5χ2μ4μ5ψ2τ4λ5γ2κ4ν5γ2κ4ρ5γ2κ4τ5γ2κ4ζ5μ2π4λ5μ2π4ν5μ2π4ρ5μ2πἄ5μ2ακἀ5μ2πρὄ5μ2ποὀ5μ2ποὀ5ν2τάὀ5ν2τάὀ5ν2τὰὀ5ν2τᾶ6μ2πλ_6μ2πν_6μ2πρ_",
        7: "ἰ5γ2κου_ξε5γ2κ_ξέ5γ2κ_ξέ5γ2κ_σι5γ2κ_ϲι5γ2κἀ5μ2πάκἀ5μ2πάκἀ5μ2πανἀ5μ2πάρἀ5μ2πάρἀ5μ2πᾶρἀ5μ2παρἀρα5μ2πἰ5μ2πρα_κε5μ2π_λό5μ2π_λό5μ2π5μ2πέη_5μ2πέη_5μ2πεη_5μ2πογι_ξε5μ2π_ξέ5μ2π_ξέ5μ2π_ρε5μ2π_ρέ5μ2π_ρέ5μ2π_ρο5μ2πρό5μ2παρό5μ2παρό5μ2περό5μ2περό5μ2πωρό5μ2πωρο5μ2πῶρο5μ2παρο5μ2περο5μ2πωσό5μ2πασό5μ2παϲό5μ2παϲό5μ2πασό5μ2πεσό5μ2πεϲό5μ2πεϲό5μ2πεσο5μ2πῶϲο5μ2πῶσό5μ2πωσό5μ2πωϲό5μ2πωϲό5μ2πωσο5μ2παϲο5μ2πασο5μ2πεϲο5μ2πεσο5μ2πωϲο5μ2πω_τα5μ2π_χα5μ2π_χό5μ2π_χό5μ2π_ξε5ν2τ_ξέ5ν2τ_ξέ5ν2τ6γ2κ1τζ6γ2κ1τσ6γ2κ1τϲ6μ2π1τζ6μ2π1τσ6μ2π1τϲ6τσ5γ2κ6τϲ5γ2κ6τσ5μ2π6τϲ5μ2π6τσ5ν2τ6τϲ5ν2τ",
        8: "ἐμι5γ2κρ_μπα5γ2κ_μπι5γ2κ_σπά5γ2κ_σπά5γ2κ_ϲπά5γ2κ_ϲπά5γ2κ_σπα5γ2κ_ϲπα5γ2κ_φιό5γ2κ_φιό5γ2κ_φιο5γ2κἀ6μ3πάριἀ6μ3πάριἀ6μ3παρι_γά5μ2πι_γά5μ2πι_γα5μ2πι_ζεϊ5μ2π_κό5μ2πρ_κό5μ2πρ_κο5μ2πρ_λι5μ2πρ5μ2πέης_5μ2πέης_5μ2πέηϲ_5μ2πέηϲ_5μ2πεης_5μ2πεηϲ_5μ2πέησ_5μ2πέησ_5μ2πεησ__μπι5μ2π_τρο6μ3π_τρό6μ3π_τρό6μ3π_ρου5μ2π_σέ5μ2πρ_σέ5μ2πρ_ϲέ5μ2πρ_ϲέ5μ2πρ_σνο5μ2π_ϲνο5μ2π_σού5μ2π_σού5μ2π_ϲού5μ2π_ϲού5μ2π_σου5μ2π_ϲου5μ2π_τζά5μ2π_τζά5μ2π_τζα5μ2π_τζι5μ2π_τό5μ2πρ_τό5μ2πρ_το5μ2πρ_φρα5μ2πἀ5ν2τάτζἀ5ν2τάτζ_βί5ν2τε_βί5ν2τε_βι5ν2τε_κα5ν2τρ_μαϊ5ν2τ_μπε5ν2τ_μπι5ν2τ_ντα5ν2τ5ν2τίβαν5ν2τίβαν_ρε5ν2τί_ρε5ν2τί_ρε5ν2τι_ροῦ5ν2τ_ρού5ν2τ_ρού5ν2τ_χα5ν2το_χα5ν2τρ_χά5ν2τρ_χά5ν2τρ6γ2κ5μ2π6γ2κ5ν2τ6μ2π5ν2τ6ν2τ5μ2π",
        9: "5γ2κραντ_ἴντρι5γ2κἰντρι5γ2κ_μα5γ2κιό_μα5γ2κιό_ντά5γ2κλ_ντά5γ2κλ_ντα5γ2κλἀλα5μ2πουἀρλού5μ2πἀρλού5μ2πἀρλοῦ5μ2πἀρλου5μ2π_βό5μ2πιρ_βό5μ2πιρ_βο5μ2πιρ_κα5μ2πάδ_κα5μ2πάδ_κα5μ2πίν_κα5μ2πίν_κα5μ2πῖν_κα5μ2πιν_κά5μ2ποτ_κά5μ2ποτ_κα5μ2πότ_κα5μ2πότ_κα5μ2ποτ_καου5μ2π_καρα5μ2π5μ2πα5μ2π5μ2πά5μ2π5μ2πά5μ2π5μ2πέ5μ2π5μ2πέ5μ2π5μ2πε5μ2π_νό5μ2πελ_νό5μ2πελ_νο5μ2πελ_ντό5μ2πρ_ντό5μ2πρ_ντο5μ2πρ_σα2μ5ποτ_ϲα2μ5ποτ_τε5μ2πεσ_τε5μ2πεϲ_τζου5μ2π_τσά5μ2πα_τσά5μ2πα_τϲά5μ2πα_τϲά5μ2πα_τσα5μ2πα_τϲα5μ2παἀτρα5ν2τέἀτρα5ν2τέἀτρα5ν2τὲ_γιβε5ν2τ_γκάι5ν2τ_γκάι5ν2τ_γκάϊ5ν2τ_γκάϊ5ν2τ_γκαϊ5ν2τ_κα5ν2ταΐ_κα5ν2ταΐ_κα5ν2ταϊ_μα5ν2τάμ_μα5ν2τάμ_μα5ν2τὰμ_μα5ν2ταμ_μα5ν2τέμ_μα5ν2τέμ_μα5ν2τεμ_μεϊ5ν2τά_μεϊ5ν2τά_μεϊ5ν2τα_μο5ν2τέλ_μο5ν2τέλ_μο5ν2τελμο5ν2τέρνμο5ν2τέρνμο5ν2τερν_νισα5ν2τ_νιϲα5ν2τ_ρεζε5ν2τ_σε5ν2τέφ_σε5ν2τέφ_ϲε5ν2τέφ_ϲε5ν2τέφ_σε5ν2τεφ_ϲε5ν2τεφ_σε5ν2τοῦ_ϲε5ν2τοῦ_σε5ν2τού_σε5ν2τού_ϲε5ν2τού_ϲε5ν2τού_σε5ν2του_ϲε5ν2του_τσα5ν2τί_τσα5ν2τί_τϲα5ν2τί_τϲα5ν2τί_τσα5ν2τι_τϲα5ν2τι",
        10: "_γιου5γ2κο_καρα5γ2κι_χούλι5γ2κ_χούλι5γ2κ_χουλι5γ2κ_γιαρα5μ2π_καλα5μ2πα_καλί5μ2πρ_καλί5μ2πρ_καλι5μ2πρ_κα5μ2παρέ_κα5μ2παρέ_κα5μ2παρὲ_κα5μ2παρε_καρνα5μ2π_κολι5μ2πρ_κου5μ2πού_κου5μ2πού_κου5μ2ποῦ_κου5μ2που5μ2πέηδες_5μ2πέηδες_5μ2πέηδεϲ_5μ2πέηδεϲ_5μ2πέηδεσ_5μ2πέηδεσ_5μ2πέηδων_5μ2πέηδων__μπό5μ2πιρ_μπό5μ2πιρ_μπο5μ2πιρ_μπο5μ2πότ_μπο5μ2πότ_μπο5μ2ποτ_σκα5μ2παβ_ϲκα5μ2παβ_ταβλα5μ2π_τζανα5μ2π_τρα5μ2πάλ_τρα5μ2πάλ_τρα5μ2παλ_φά5μ2πρικ_φά5μ2πρικ_φα5μ2πρικ_μπαλά5ν2τ_μπαλά5ν2τ_μπαλα5ν2τ_μπα5ν2ταν_μπου5ν2τα_μπου5ν2τρ",
        11: "_καρα6μ3πόλ_καρα6μ3πόλ_καρα6μ3πολ_κολού5μ2πρ_κολού5μ2πρ_κολοῦ5μ2πρ_κολου5μ2πρ_κο6μ3πρέσσ_κο6μ3πρέσσ_κο6μ3πρέϲϲ_κο6μ3πρέϲϲ_κο6μ3πρεσσ_κο6μ3πρεϲϲ_κοντρα5μ2π_κωλού5μ2πρ_κωλού5μ2πρ_κωλοῦ5μ2πρ_κωλου5μ2πρ_μανιτό5μ2π_μανιτό5μ2π_μπα6μ3πάκι_μπα6μ3πάκι_μπα6μ3πακι_ρεπού5μ2πλ_ρεπού5μ2πλ_ρεπου5μ2πλ_τα6μ3περαμ_τα6μ3ποῦρλ_τα6μ3πούρλ_τα6μ3πούρλ_τρα5μ2ποῦκ_τρα5μ2πούκ_τρα5μ2πούκ_τρα5μ2πουκ_τσι5μ2πούκ_τσι5μ2πούκ_τϲι5μ2πούκ_τϲι5μ2πούκ_τσι5μ2πουκ_τϲι5μ2πουκ_τσι5μ2πούσ_τσι5μ2πούσ_τϲι5μ2πούϲ_τϲι5μ2πούϲ_τσι5μ2πουσ_τϲι5μ2πουϲ_γιαχου5ν2τ",
        12: "_σαλτιπά5γ2κ_σαλτιπά5γ2κ_ϲαλτιπά5γ2κ_ϲαλτιπά5γ2κ_κουλού5μ2πρ_κουλού5μ2πρ_κουλοῦ5μ2πρ_κουλου5μ2πρ_μπου5μ2πούν_μπου5μ2πούν_μπου5μ2ποῦν_μπου5μ2πουν_χοντρο5μ2πα_λικβι5ν2ταρ_ντερμπε5ν2τ_ντου5ν2τούκ_ντου5ν2τούκ_ντου5ν2τοῦκ_ντου5ν2τουκ_φαστφου5ν2τ_φαϲτφου5ν2τ",
        13: "_μπασκε2τ5μ2π_μπαϲκε2τ5μ2π_μπασι5μ2πουζ_μπαϲι5μ2πουζ"
    }
};
