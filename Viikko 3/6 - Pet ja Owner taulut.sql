use test;

-- Pet taulu

desc pet;

-- Owner taulu

desc owner;

-- Esimerkkikysely: Esitetään kunkin lemmikin omistaja (mikäli lemmikillä on omistaja).alter

select name as pet_name, concat(first_name, ' ', last_name) as owner_name from pet join owner on pet.ownerID = owner.ownerID;