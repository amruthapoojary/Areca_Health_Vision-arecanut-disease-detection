-- Create the database
CREATE DATABASE arecanut_detection;

-- Show all databases (optional)
SHOW DATABASES;

-- Use the created database
USE arecanut_detection;

-- Create a simple login table
CREATE TABLE login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- View the table structure (optional)
SHOW TABLES;

-- View inserted data (optional)
SELECT * FROM login;

-- Example insert (replace with real hash in practice)
INSERT INTO login (email, password) 
VALUES ('user@example.com', 'hashedPasswordHere');

-- Example delete (optional)
DELETE FROM login WHERE id = 1;


CREATE TABLE recommendation_cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    disease VARCHAR(100),    -- yellow_leaf, fruit_rot, bud_rot
    stage VARCHAR(50),       -- early, moderate, critical
    title VARCHAR(255),
    description TEXT,
    image_url VARCHAR(500),
    buy_link VARCHAR(500)
);
SELECT * FROM recommendation_cards;


INSERT INTO recommendation_cards 
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'early', 
'Bordeaux Mixture (Copper-based Fungicide)',
'Widely used as a preventive and curative fungicide for fungal diseases in arecanut. Apply as a 1% spray on palm leaves at the first signs of yellowing to prevent disease spread and secondary infections.​',
'https://katyayanikrishidirect.com/cdn/shop/files/bordeaux_mixture_fungicide.webp?v=1752236809&width=713',
'https://katyayanikrishidirect.com/products/bordeaux-mixture-fungicide');

INSERT INTO recommendation_cards 
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'early', 
'Ridomil Gold (Metalaxyl + Mancozeb)',
'A powerful systemic and contact fungicide, effective in controlling soil-borne and foliar pathogens associated with yellow leaf disease. Use as a foliar spray (0.2%) at early stages for best results.​',
'https://cdn.dotpe.in/longtail/store-items/6792607/xo91RAVs.png',
'https://www.kisancenter.in/product/26147925/Syngenta-Ridomil-Gold-Fungicide--Metalaxyl-4--Manconzeb-64--?srsltid=AfmBOorzwyIt8pG3n6SNlxWEr7A0xyFy08-4jB5QL1XNTQl_xvc3UX9Y4Q8');

INSERT INTO recommendation_cards 
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'early', 
'Copper Oxychloride',
'Recommended as an early intervention fungicide, Copper Oxychloride helps limit further yellowing and controls secondary fungal outbreaks. Apply a 0.25% spray at onset of symptoms.​',
'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhuDJP0jeEMdYfreIrKjHInoz_Iews20MAwDCM9vChl6n4evfdmR050KWi8wSy8SbY40wYTLhpdkBJuZl0UYht2n13K2IpCO1_ZyXPKVNVJAbDt6e-58aPPdU',
'https://agribegri.com/products/thyla-p-1-litre.php?srsltid=AfmBOorlUJamX8if2se4BcQ3F0eSKA04ZxA0prpVMMoy7AdNHhtuZG9YAUk');

INSERT INTO recommendation_cards 
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'early', 
'Trichoderma harzianum (Bio-agent)',
'A natural soil fungus that promotes root health and controls soil-borne pathogens. Mix with farmyard manure and apply to root zone at the onset of yellowing for disease suppression.​',
'https://m.media-amazon.com/images/I/71tje6e9SIL.SL1280.jpg',
'https://www.amazon.in/Trichoherz-P-Trichoderma-Harzianum-Gardening-Pack/dp/B0D78X9S2X?ref_=fplfs&smid=A2AL6IVND0I91F&th=1');

INSERT INTO recommendation_cards 
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'early', 
'Neem Cake/Extract',
'Neem-based products serve as both organic soil conditioners and bio-pesticides, reducing root infections and supporting early-stage palm health. Apply 1.5–2 kg per palm annually at first signs of yellowing.​',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSYrQx4ATUcC9ejC254wp8LAkQet_wzHjQdj8osFsRGGw3fPrWbAAXiFACSzg1T7clu2--Ip9x9La-UNQS_H1jSqiQmUBydKMW6s0rYS-9I',
'https://agriplexindia.com/products/anshul-maxi-neem-azadiractin-0-03-ec?variant=44325038817574&country=IN');

INSERT INTO recommendation_cards 
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'early', 
'Balanced NPK + Micronutrients',
'Use a balanced fertilizer regime with NPK and supplement with magnesium sulphate and borax to correct nutrient deficiencies linked to yellowing. This boosts plant immunity and can limit disease progression at the earliest stage.​',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8o-W4Y4yHzaotuG47aWNyKysm7KkKIlpBiuCgcQQ7VjJ-x3F6d4NIlsBnORJLQPHC28jtBe5e0n5bBQ3NrE5IwrT7phwNmCfsvw3tpSZ0I5A94BExNkCg',
'https://www.flipkart.com/aranyani-balanced-npk-nutrients-plants-manure/p/itm73e0b372658ce?pid=SMNH2YBVYYAFCJJJ');



INSERT INTO recommendation_cards
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'moderate',
'Calixin Root Feeding Solution',
'Root feed affected palms with 125 ml of 1.5% Calixin solution every three months (March, July, October, January) to manage moderate infection and disease spread.',
'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJTRKeuLE2WPwl2iumZbUYrKz5HtXX2OAZz27aLImOg2ytwMM4MyArcgfA6Xnw08OgJL6KkCAIgxJDpszGqKVhYQYZbFUSZUs41WzPLPY',
'https://www.indiamart.com/proddetail/calixin-fungicide-15929114597.html');

INSERT INTO recommendation_cards
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'moderate',
'Mancozeb + Carbendazim (Combi-Fungicide)',
'Combi-fungicides highly effective for leaf spot and yellow leaf symptoms. Spray Mancozeb + Carbendazim (as per label recommendations) on leaves to inhibit pathogen growth.',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSeNkoXbe5mrhgxYFJ4qPq4xCSqTQEL4gknorvqKeXrLIqK_CMoZB7Jp9A5XjGVHcmfGUkM79SaXJaHkgBEOjPl0hBIGgQ9RXm6VG5wpC8',
'https://agribegri.com/products/hifes-carbendazim-50-mancozeb-50-wp-fungicide.php');

INSERT INTO recommendation_cards
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'moderate',
'Azoxystrobin + Tebuconazole',
'Use combination strobilurin (Azoxystrobin) and triazole (Tebuconazole) fungicides, effective against moderate fungal infections. Apply as a foliar spray per guidelines.',
'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQft7hs3nhmpPfZTkICIONzTNcE_ck_lvlnRUdHvd2rSz4jhLDfOmHkvm5UJzcxyTkQ3Q6S1_D83hSNYKzkMbo72l7ImUzWvB4BUyPtxFHR',
'https://agribegri.com/products/tebustar-fungicide-azoxystrobin-tebuconazole.php');

INSERT INTO recommendation_cards
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'moderate',
'Bavistin (Carbendazim)',
'Apply Bavistin at 1g/L as foliar spray for management of moderate disease severity. Monthly sprays from December to May are recommended for best results.',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTtqoWV7JKvBeUzxEtnLAE-lUXqYy8ausT1X_ty_NC5elwSVcVAlmstCQsCwyyMzbNfEDYOyEJAhMo2LaK4HTa_efkyieNfEcuVKoIWVh-H',
'https://www.agribegri.com/products/bayer-bavistin-fungicide-carbendazim.php');


INSERT INTO recommendation_cards
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'moderate',
'Organic Manures & Neem Cake',
'Treat affected palms with recommended organic manures (FYM, compost, vermicompost) and neem cake (1.5–2 kg per palm/year) to support recovery and soil health.',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDz0ZaV4bXyQUdbQK4nKt9GXurwIqUKfB2DX_m1JT3vO6w3Bw170QMTKnFdwV7fq6DfNaFNSlk0EJw',
'https://agriplexindia.com/products/anshul-maxi-neem-azadiractin-0-03-ec');


INSERT INTO recommendation_cards
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'moderate',
'Lime, Boron, and Zinc Supplements',
'Apply 1 kg lime per palm/year and supplement with borax (25g/palm/year) and zinc products to boost resistance and improve palm health during moderate infection.',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJruE2DTmoCodrsjdXp5SMT2q5QCKGs35BXiWTi_2XClI_1lIdgWvTX5EEuKglff3Qaq9h1eN9LxaUw3AM4M-ppjEjRGzMZ4Pxzy7BK6QSPbLl3YVLOCkuNHw',
'https://agribegri.com/products/buy-tata-rallis-surplus-boron-20-fertilizer-online.php');



INSERT INTO recommendation_cards
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'critical',
'Removal of Severely Diseased Palms',
'In advanced stages, palms with completely yellowed, necrotic leaves and poor yield need to be removed, destroyed, and replaced with disease-free seedlings to halt disease progression in the plantation.',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1eOHtqdyuWDi3m3SRj7u4nrCgYl0reRQb3UU43tMrkA&t=1',
'https://krushidukan.bharatagri.com/products/arecanut-seedlings');

INSERT INTO recommendation_cards
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'critical',
'Isolation by Trenches',
'Isolate critical-stage palms by digging deep trenches (30 cm wide, 60 cm deep) around the affected palm to prevent root and soil-borne pathogen spread.',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6vawk5YXI1jqXHY5b1FJgEJrjJ8GAJDKgT4zw6tSAlg&t=1',
'https://www.indiamart.com/proddetail/arecanut-agricultural-tools-19213363112.html');

INSERT INTO recommendation_cards
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'critical',
'Propiconazole Root Feeding & Drenching',
'Apply propiconazole root feeding (1 ml/L) at 125 ml/palm and drench the soil at the root zone with 15–20 L of solution quarterly. This suppresses fungus even at advanced stage.',
'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTfWZywx83rhs6wZkz6lRdSGAkwAuvH29IVhvb0uJmV1KHe26kuFkaxi433Mhr3w2Z1KTiiLbpMPKtThcpa59pvE1lXFI3Eyag',
'https://agribegri.com/products/propiconazole-fungicide.php');

INSERT INTO recommendation_cards
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'critical',
'Hexaconazole Smearing for Lesions',
'For stem and crown rot, complete removal of infected tissue and smearing with 0.2% hexaconazole is recommended to check progression in critical cases.',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRXSNRxn7r3VU7tRGw9aKMBVMfXVvZoX8zk1gCwM0uih3atuDc57Q_uVzrXiDz_LiCma9zn8EkgqChsuQ_kD1QZ5BL1D0QsHvHSgGKfsWvIoAmEV52rVwkNQw',
'https://agribegri.com/products/hexaconazole-fungicide.php');

INSERT INTO recommendation_cards
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'critical',
'Streptocycline or Tetracycline Spray',
'For bacterial involvement in critical infections, use foliar sprays of streptocycline or tetracycline (0.5 g/L) at monthly intervals to reduce disease pressure.',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSGyAfWcpTaroopA4rGxnEVGVFOk7hdxykKcjjLoDt3Ma5bFBxAWFvQ8UMhX8qlrnYipAPMNBBdRy0BqeKFiah1Qxw5cWyD3Ufp1pT4zdA8mkL5iJvnJveH',
'https://www.indiamart.com/proddetail/streptocycline-16413634530.html');

INSERT INTO recommendation_cards
(disease, stage, title, description, image_url, buy_link)
VALUES
('yellow_leaf', 'critical',
'Enhanced Nutrient & Organic Inputs',
'Apply double the regular dose of organic manure (up to 12 kg/palm/year) along with all recommended NPK + lime + boron + zinc to improve palm vigor and support possible recovery in critical stages.',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDz0ZaV4bXyQUdbQK4nKt9GXurwIqUKfB2DX_m1JT3vO6w3Bw170QMTKnFdwV7fq6DfNaFNSlk0EJw&usqp=CAc',
'https://agribegri.com/products/buy-tata-rallis-surplus-boron-20-fertilizer-online.php');

SELECT * FROM recommendation_cards
WHERE disease = 'yellow_leaf'
  AND stage = 'critical';
  
  
INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'early',
 'Bordeaux Mixture (1%)',
 'Prophylactic and early curative spray of 1% Bordeaux Mixture is the most recommended and effective treatment. Apply the first spray just after the onset of monsoon and a repeat spray 40-45 days later for maximum protection.',
 'https://katyayanikrishidirect.com/cdn/shop/files/bordeaux_mixture_fungicide.webp?v=1752236809&width=713',
 'https://katyayanikrishidirect.com/products/bordeaux-mixture-fungicide');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'early',
 'Metalaxyl + Mancozeb (Ridomil Gold)',
 'An effective systemic and contact fungicide recommended for early fruit rot. Use a 0.2% foliar spray at early signs of infection, especially around pre-monsoon and monsoon onset.',
 'https://cdn.dotpe.in/longtail/store-items/6792607/xo91RAVs.png',
 'https://www.kisancenter.in/product/26147925/Syngenta-Ridomil-Gold-Fungicide--Metalaxyl-4--Manconzeb-64');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'early',
 'Copper Oxychloride (0.3%)',
 'For early infection, spraying Copper Oxychloride (0.3%) reduces lesion development and prevents initial nut drop. Apply at early symptoms and repeat as needed.',
 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhuDJP0jeEMdYfreIrKjHInoz_Iews20MAwDCM9vChl6n4evfdmR050KWi8wSy8SbY40wYTLhpdkBJuZl0UYht2n13K2IpCO1_ZyXPKVNVJAbDt6e-58aPPdU',
 'https://agribegri.com/products/thyla-p-1-litre.php');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'early',
 'Trichoderma harzianum (Bio-agent)',
 'Apply Trichoderma harzianum (10⁸ cfu/ml) as a bunch dip or in the root zone to suppress Phytophthora and support early biocontrol, reducing initial nut rot and loss.',
 'https://m.media-amazon.com/images/I/71tje6e9SIL.SL1280.jpg',
 'https://www.amazon.in/Trichoherz-P-Trichoderma-Harzianum-Gardening-Pack/dp/B0D78X9S2X');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'early',
 'Neem Cake (Soil Amendment)',
 'Incorporating 1.5–2 kg neem cake per palm at the start of the rainy season helps check early-stage fruit rot by improving soil health and providing anti-fungal activity.',
 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSYrQx4ATUcC9ejC254wp8LAkQet_wzHjQdj8osFsRGGw3fPrWbAAXiFACSzg1T7clu2--Ip9x9La-UNQS_H1jSqiQmUBydKMW6s0rYS-9I',
 'https://agriplexindia.com/products/anshul-maxi-neem-azadiractin-0-03-ec');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'early',
 'Sanitation and Drainage',
 'Regularly collect and destroy fallen infected nuts/leaves, and ensure proper drainage to prevent initial disease spread and pathogen buildup; integrate with chemical sprays for maximum early-stage effect.',
 'https://image.shutterstock.com/image-photo/cleaning-fallen-nuts-coconut-farm-260nw-1122420124.jpg',
 'https://www.amazon.in/Garden-Leaf-Rake/dp/B07VS45996');
 
 

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'moderate',
 'Bordeaux Mixture (1%)',
 'Apply Bordeaux Mixture (1%) as a foliar spray at 40-day intervals throughout the monsoon. At moderate infection, regular repeat sprays help control spread and protect remaining healthy nuts.',
 'https://katyayanikrishidirect.com/cdn/shop/files/bordeaux_mixture_fungicide.webp?v=1752236809&width=713',
 'https://katyayanikrishidirect.com/products/bordeaux-mixture-fungicide');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'moderate',
 'Mandipropamid 23.4% SC',
 'Use Mandipropamid 0.5% as a contact and translaminar fungicide, which has proven effective in endemic areas especially for managing moderate fruit rot where conventional treatments might fail.',
 'https://cdn.shopify.com/s/files/1/0715/2755/9659/products/mandipropamid_fungicide_large.jpg',
 'https://agribegri.com/products/mandipropamid-fungicide.php');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'moderate',
 'Metalaxyl + Mancozeb',
 'Metalaxyl + Mancozeb (0.2%) as a foliar spray during mid-monsoon and repeated at marble/premature nut stage is highly effective for moderate rot and limits further nut drop.',
 'https://cdn.dotpe.in/longtail/store-items/6792607/xo91RAVs.png',
 'https://www.kisancenter.in/product/26147925/Syngenta-Ridomil-Gold-Fungicide--Metalaxyl-4--Manconzeb-64');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'moderate',
 'Copper Oxychloride (0.3%)',
 'For moderate infection and where Bordeaux Mixture isn’t feasible, spraying Copper Oxychloride 0.3% controls lesions and halts further spread.',
 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhuDJP0jeEMdYfreIrKjHInoz_Iews20MAwDCM9vChl6n4evfdmR050KWi8wSy8SbY40wYTLhpdkBJuZl0UYht2n13K2IpCO1_ZyXPKVNVJAbDt6e-58aPPdU',
 'https://agribegri.com/products/thyla-p-1-litre.php');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'moderate',
 'Covering Fruit Bunches with Polythene',
 'Prevent rain splash and further fruit rot by covering bunches with 125 gauge polythene bags (75x60cm); this is especially effective at moderate disease level through monsoon.',
 'https://5.imimg.com/data5/FV/ND/My/SELLER-8772854/plastic-bags-500x500.jpg',
 'https://www.indiamart.com/proddetail/polythene-bags-18128530155.html');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'moderate',
 'Trichoderma harzianum & Neem Cake',
 'Apply Trichoderma harzianum (bio-agent) and neem cake (1.5–2kg/palm) at base; this integrated management is proven to minimize moderate fruit rot losses.',
 'https://m.media-amazon.com/images/I/71tje6e9SIL.SL1280.jpg',
 'https://www.amazon.in/Trichoherz-P-Trichoderma-Harzianum-Gardening-Pack/dp/B0D78X9S2X');
 
 
 
 
 
 INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'critical',
 'Sequential Bordeaux Mixture Sprays (1%)',
 'At severe infection, apply Bordeaux mixture (1%) in 3-4 sequential sprays at 40-day intervals from early monsoon; additional sprays may be required if rains persist or outbreak is severe. Ensures maximum suppression during critical stage.',
 'https://katyayanikrishidirect.com/cdn/shop/files/bordeaux_mixture_fungicide.webp?v=1752236809&width=713',
 'https://katyayanikrishidirect.com/products/bordeaux-mixture-fungicide');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'critical',
 'Mandipropamid 23.4% SC Fungicide',
 'Use Mandipropamid (0.5%) as a contact and translaminar fungicide for critical infection, especially where conventional treatments show reduced efficacy; repeat at 45-day intervals.',
 'https://cdn.shopify.com/s/files/1/0715/2755/9659/products/mandipropamid_fungicide_large.jpg',
 'https://agribegri.com/products/mandipropamid-fungicide.php');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'critical',
 'Metalaxyl-MZ or Curzate Application',
 'For advanced fruit rot, apply Metalaxyl-MZ (0.2%) or Curzate (Cymoxanil + Mancozeb, 0.25%) as foliar sprays during heavy infection and persistent rainfall. Effective against virulent Phytophthora strains.',
 'https://cdn.dotpe.in/longtail/store-items/6792607/xo91RAVs.png',
 'https://www.kisancenter.in/product/26147925/Syngenta-Ridomil-Gold-Fungicide--Metalaxyl-4--Manconzeb-64');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'critical',
 'Mulching & Polythene Bunch Covering',
 'In severely affected plots, mulch soil with transparent polythene and cover arecanut bunches with 125 gauge polythene bags (75x60 cm) to prevent splash dispersal and reduce nut drop.',
 'https://5.imimg.com/data5/FV/ND/My/SELLER-8772854/plastic-bags-500x500.jpg',
 'https://www.indiamart.com/proddetail/polythene-bags-18128530155.html');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'critical',
 'Trichoderma harzianum + Neem Cake + Lime',
 'Integrate Trichoderma harzianum (bio-agent) at the base, neem cake (1.5–2kg/palm), and agricultural lime (200kg/acre before monsoon) for critical-stage palm recovery and soil neutralization. Improves survival and vigor when disease is severe.',
 'https://m.media-amazon.com/images/I/71tje6e9SIL.SL1280.jpg',
 'https://www.amazon.in/Trichoherz-P-Trichoderma-Harzianum-Gardening-Pack/dp/B0D78X9S2X');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES 
('fruit_rot', 'critical',
 'Removal & Destruction of Severely Affected Nuts',
 'Collect all fallen and infected nuts, leaves, and plant debris immediately during peak infection, and destroy them outside the plantation to break the disease cycle. Essential step at critical stage outbreaks with active shedding.',
 'https://image.shutterstock.com/image-photo/cleaning-fallen-nuts-coconut-farm-260nw-1122420124.jpg',
 'https://www.amazon.in/Garden-Leaf-Rake/dp/B07VS45996');


INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES
('stem_bleeding', 'early',
 'Wound Cleaning & Tridemorph Smearing',
 'Immediately chisel out all affected stem tissues at the bleeding site, then smear with 5% Tridemorph (Calixin) or Bordeaux paste. Cover the treated wound with coal tar after 1–2 days for maximum healing.',
 'https://www.nichinoindia.com/wp-content/uploads/2021/07/Tridemorph.png',
 'https://www.indiamart.com/proddetail/calixin-tridemorph-fungicide-19489249233.html');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES
('stem_bleeding', 'early',
 'Calixin Root Feeding (Tridemorph)',
 'For palms in early stages, root feed with 125 ml of 1.5% Calixin (Tridemorph) solution at quarterly intervals (Jan, April, July, Oct) to arrest internal fungal spread.',
 'https://www.indiamart.com/proddetail/calixin-fungicide-15929114597.html',
 'https://www.indiamart.com/proddetail/calixin-fungicide-15929114597.html');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES
('stem_bleeding', 'early',
 'Indofil M-45 (Mancozeb) Spray',
 'Foliar spray with Indofil M-45 (3g/L) at monthly intervals from December to May controls early stem lesions and prevents escalation of stem bleeding.',
 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbcBideIRtNxayAGA2B7KWIS8QJ2Ddn-UiFerA7PCTeHtcC4Ha621WZ7pgVrUzz3-7LlYJe5PK5Vc5TJYf0k4ZJ_qpdC9v3AwBqT0V9lGPLkuLhVDjCoOb',
 'https://www.meesho.com/pack-of-100-gm-carbendazim-12-mancozeb-63-wp-a-proven-classic-fungicide-with-systemic-contact-action/p/4lpu5o');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES
('stem_bleeding', 'early',
 'Trichoderma harzianum Paste Smearing',
 'Prepare a talc-based paste of Trichoderma harzianum and smear directly onto early bleeding patches of the stem, then repeat soil application (50–100g/palm) to promote biocontrol inside tissues.',
 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsdVWVT98gXaMC7myVnbvl9QTsrESpai5UJjaypIn7wKL6e4IfY8_ofwW1QeFyN-_wvNn7HlIoUIO3yLQBTwb8J-KeAuvmXSgrShixoS0JHP9KaW9iYeYv',
 'https://www.flipkart.com/wesfra-bio-organic-trichoderma-viride-liquid-manure/p/itm4be7010a87146');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES
('stem_bleeding', 'early',
 'AMC (Arka Microbial Consortium)',
 'Soil apply 50g of AMC per palm at the start of pre-monsoon, mix with compost for root health and stem protection; increase to half yearly if symptoms appear.',
 'https://5.imimg.com/data5/SELLER/Default/2021/8/SV/ND/BN/1279380/arka-microbial-consortium-100-gm-500x500.jpg',
 'https://agribegri.com/products/arka-microbial-consortium-amc.php');

INSERT INTO recommendation_cards (disease, stage, title, description, image_url, buy_link)
VALUES
('stem_bleeding', 'early',
 'Neem Cake + Boric Acid Basal Application',
 'Incorporate 2kg/palm neem cake and 50g boric acid into the soil around palm basin in early rains; reduces initial fungal activity and secondary pest entry.',
 'https://plantcare.co.in/wp-content/uploads/2021/09/NEEM-CAKE.jpeg',
 'https://plantcare.co.in/product/plant-care-organic-neem-cake/?attribute_weight=500+GRAMS');
 
 
 
 
 
 
 INSERT INTO recommendation_cards 
(disease, stage, title, description, image_url, buy_link)
VALUES
('stem_bleeding', 'moderate', 'Hexaconazole Root Feeding',
'Root feed affected palms with Hexaconazole (2 ml/100 ml water) at three-month intervals (January, April, September) to target moderate internal infections and support palm recovery.​',
'https://5.imimg.com/data5/SELLER/Default/2022/9/ND/CF/IR/136921731/hexaconazole-fungicide-500x500.jpg',
'https://www.indiamart.com/proddetail/hexaconazole-fungicide-18528738955.html'),

('stem_bleeding', 'moderate', 'Aureofungin + Copper Sulphate Spraying',
'Foliar spray a mixture of Aureofungin Sol and Copper Sulphate (0.05 g/L each) monthly during moderate disease progression to suppress fungal spread and heal lesions rapidly.​',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ35B1x4TXApsAQ6W9yMcKBoosXqYpfbXi2MTrgYiH8wWzg7t_sfdAePlZRmWpUGpLe5SOMHRwQVhv9q_46gWNL8hqUgDWQmmIcXmtq0I-WKoYX4eJoJ7n5',
'https://www.indiamart.com/proddetail/aureofungin-16044183997.html'),

('stem_bleeding', 'moderate', 'Propineb 70% WP Spray',
'Spray Propineb 0.25% as a contact fungicide on moderate stem bleeding patches and leaf axils to arrest fungal progress and promote rapid healing.​',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwOi5x4WHilPfVfhnlNUtuvWeSPnI9mjDVjzlCGptu0KhJuQdcqFoAFrVxALzYeIzOfdVRJuPUkVlC4ttqCIsjhtGHp4Rxmf1knJ2H001q',
'https://agribegri.com/products/propineb-fungicide.php'),

('stem_bleeding', 'moderate', 'Arka Microbial Consortium (AMC)',
'Apply 50g/tree of AMC at monsoon onset, and mix with farmyard manure at moderate disease stage. Repeat if symptoms persist; boosts root health and biocontrol of fungal pathogens.​',
'https://5.imimg.com/data5/SELLER/Default/2021/8/SV/ND/BN/1279380/arka-microbial-consortium-100-gm-500x500.jpg',
'https://agribegri.com/products/arka-microbial-consortium-amc.php'),

('stem_bleeding', 'moderate', 'Carbendazim + Mancozeb (Combo Fungicide)',
'Use combo fungicide containing Carbendazim 12% and Mancozeb 63% (0.1%) as a spray for moderate stem cankers. Strong efficacy in reducing lesion spread and supporting tissue recovery.​',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbcBideIRtNxayAGA2B7KWIS8QJ2Ddn-UiFerA7PCTeHtcC4Ha621WZ7pgVrUzz3-7LlYJe5PK5Vc5TJYf0k4ZJ_qpdC9v3AwBqT0V9lGPLkuLhVDjCoOb',
'https://www.meesho.com/pack-of-100-gm-carbendazim-12-mancozeb-63-wp-a-proven-classic-fungicide-with-systemic-contact-action/p/4lpu5o'),

('stem_bleeding', 'moderate', 'Bordeaux Paste + Protective Cover',
'After chiseling infected stem tissue, smear Bordeaux paste and cover wound with protective material (plastic wrap or coal tar). Essential for palm recovery at moderate stage and to protect from secondary infection.​',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSRhhuSLrDP8Kve7ujZuNHjaUM3eiW1q0HdaI7gf8qxK53nUGUepOEsisI-bdjS9Spz2l5hXcbERA_cGdQ85cIgqIAv51JPEWJ-2fN_vIfalvsvAzvmtLfK',
'https://katyayanikrishidirect.com/products/bordeaux-mixture-fungicide');

SELECT * FROM recommendation_cards
WHERE disease = 'stem_bleeding' AND stage = 'moderate';



INSERT INTO recommendation_cards 
(disease, stage, title, description, image_url, buy_link)
VALUES
('stem_bleeding', 'critical', 'Complete Chiseling & Antiseptic Dressing',
'Remove all necrotic stem tissues up to healthy wood, disinfect thoroughly with 10% sodium hypochlorite or copper oxychloride. Apply antiseptic dressing (coal tar + copper paste) to the wound to prevent reinfection.​',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJG4MBBK2FBAw1qpudHSlFWGOCLcMiEzKDeY-dkvvKF7TuE3d53IvoueE8otcE2txqcc1F9-6ibxcS2ghVUiyJ0i_PWEEL3mf4fR-Ey8gZ_SCg5OsKxKRTDg',
'https://agribegri.com/products/gharda-cutox-copper-oxychloride-50-wp-fungicide.php'),

('stem_bleeding', 'critical', 'Removal and Destruction of Severely Infected Palms',
'Palms with more than 75% stem circumference affected and rapid deterioration should be removed and destroyed to prevent pathogen spread to neighboring trees.​',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1eOHtqdyuWDi3m3SRj7u4nrCgYl0reRQb3UU43tMrkA&t=1',
'https://krushidukan.bharatagri.com/products/arecanut-seedlings'),

('stem_bleeding', 'critical', 'High-Dose Systemic Fungicide Soaking',
'Soak the critical palm''s root zone with Carbendazim (0.2% solution, 10L/palm) or Tricyclazole (0.2%), repeated fortnightly as a salvage attempt for systemic fungus kill-off.​',
'https://5.imimg.com/data5/SELLER/Default/2022/6/TV/EF/YK/143481956/tricyclazole-75-wp-1000x1000.jpeg',
'https://www.indiamart.com/proddetail/shree-tricyclazole-75-wp-fungicide-25890460233.html'),

('stem_bleeding', 'critical', 'Boric Acid and Potassium Application',
'Increase doses of Boric Acid (up to 100g/palm/year) and Potassium Sulphate (300g/palm/year) to boost emergency recovery potential and strengthen residual tissues.​',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR0bfHkUYglGyD3K9ySphF-PWouf7ObzO_VDj1spYCrs3DXnPnY6XUB6tQgtpUdev69EBwEJqGI1K5O5kuAiKrqoUoN5fEWd8ZX-q3L56NX64qCUL02FzFvtQ',
'https://www.mystore.in/en/product/0-0-50-potassium-sulphate-1'),

('stem_bleeding', 'critical', 'Intensive Soil Drenching With AMC + Trichoderma',
'Apply 100g/palm of Arka Microbial Consortium (AMC) and 50g Trichoderma harzianum, mixed into 20L compost slurry and drenched at the base every 2 weeks.​',
'https://5.imimg.com/data5/SELLER/Default/2021/8/SV/ND/BN/1279380/arka-microbial-consortium-100-gm-500x500.jpg',
'https://agribegri.com/products/arka-microbial-consortium-amc.php'),

('stem_bleeding', 'critical', 'Drainage and Relocation Measures',
'If waterlogging is present near the palm, install large gravel drains and consider relocating saplings to raised beds after removal of dead palms; essential in critical disease to prevent further outbreaks.​',
'https://www.gardensalive.com/product/gravel-drainage-trenches',
'https://www.gardensalive.com/product/gravel-drainage-trenches');

