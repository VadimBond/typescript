// enum

enum Membership {
  Simple,
  Standart,
  Premium
}

const membership = Membership.Premium;
const membershipRevers = Membership[1];
console.log(membership);  // 2
console.log(membershipRevers);  // Standart

enum SosialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const sosial = SosialMedia.FACEBOOK;
console.log(sosial); // FACEBOOK
